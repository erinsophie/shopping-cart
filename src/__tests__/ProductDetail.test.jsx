import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, useParams } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import { BasketProvider } from '../components/BasketContext';

// mock fetch function
window.fetch = vi.fn();

// create mock response
function createFetchResponse(data) {
  return {
    ok: true,
    json: () => Promise.resolve(data),
  };
}

// mock react-router-dom in order to mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('Render tests', () => {
  beforeEach(() => {
    // mock params
    useParams.mockReturnValue({ category: 'jewelery', productId: 5 });
    // set the returned value to be the mock products array
    fetch.mockResolvedValue(createFetchResponse(mockProduct));
  });

  const mockProduct = {
    id: 5,
    title: 'title1',
    price: '129.99',
    category: 'jewelery',
    description: 'lorem ipsum',
    image: 'img',
  };

  let container;

  // snapshot
  it('Matches snapshot', () => {
    const { container: renderedContainer } = render(
      <MemoryRouter>
        <BasketProvider>
          <ProductDetail />
        </BasketProvider>
      </MemoryRouter>,
    );

    container = renderedContainer;
    expect(container).toMatchSnapshot();
  });

  it('Loading text is shown while API is fetching data', async () => {
    render(
      <MemoryRouter>
        <BasketProvider>
          <ProductDetail />
        </BasketProvider>
      </MemoryRouter>,
    );

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it('Makes a GET request to fetch products', () => {
    render(
      <MemoryRouter>
        <BasketProvider>
          <ProductDetail />
        </BasketProvider>
      </MemoryRouter>,
    );

    expect(fetch).toHaveBeenCalledWith('https://fakestoreapi.com/products/5');
  });

  it('Renders correct product details', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <BasketProvider>
            <ProductDetail />
          </BasketProvider>
        </MemoryRouter>,
      );
    });

    expect(await screen.findByText(mockProduct.title)).toBeInTheDocument();
    expect(
      await screen.findByText(mockProduct.description),
    ).toBeInTheDocument();
    expect(await screen.findByText('Back to jewelery')).toBeInTheDocument();
  });
});
