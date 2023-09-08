import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, useParams } from 'react-router-dom';
import { BasketProvider } from '../components/BasketContext';
import ProductPage from '../pages/ProductPage';

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
    useParams.mockReturnValue({ category: 'electronics' });
    // set the returned value to be the mock products array
    fetch.mockResolvedValue(createFetchResponse(mockProducts));
  });

  const mockProducts = [
    {
      id: 5,
      title: 'title1',
      price: '39.99',
      category: 'electronics',
      description: 'lorem ipsum',
      image: 'img',
    },
    {
      id: 8,
      title: 'title2',
      price: '20',
      category: 'electronics',
      description: 'lorem ipsum',
      image: 'image',
    },
  ];

  let container;

  // snapshot
  it('Matches snapshot', () => {
    const { container: renderedContainer } = render(
      <MemoryRouter>
        <BasketProvider>
          <ProductPage />
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
          <ProductPage />
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
          <ProductPage />
        </BasketProvider>
      </MemoryRouter>,
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products/category/electronics',
    );
  });

  it('Renders correct products for the given category', () => {
    act(() => {
      render(
        <MemoryRouter>
          <BasketProvider>
            <ProductPage />
          </BasketProvider>
        </MemoryRouter>,
      );
    });

    mockProducts.forEach(async (product) => {
      const title = await screen.findByText(product.title);
      expect(title).toBeInTheDocument();
    });
  });
});
