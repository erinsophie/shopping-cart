import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  render,
  screen,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BasketProvider } from '../components/BasketContext';
import Categories from '../components/Categories';
import { capitaliseLetter } from '../utils/utils';

// mock fetch function
window.fetch = vi.fn();

// create mock response
function createFetchResponse(data) {
  return {
    ok: true,
    json: () => Promise.resolve(data),
  };
}

describe('Render tests', () => {
  beforeEach(() => {
    // set the returned resolved value to be the categories array
    fetch.mockResolvedValue(createFetchResponse(categories));
  });

  const categories = ['category1', 'category2', 'category3', 'category4'];
  let container;

  // snapshot
  it('Matches snapshot', () => {
    const { container: renderedContainer } = render(
      <MemoryRouter>
        <BasketProvider>
          <Categories />
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
          <Categories />
        </BasketProvider>
      </MemoryRouter>,
    );

    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it('Makes a GET request to fetch categories', () => {
    render(
      <MemoryRouter>
        <BasketProvider>
          <Categories />
        </BasketProvider>
      </MemoryRouter>,
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products/categories',
    );
  });

  it('Displays correct amount of categories', async () => {
    render(
      <MemoryRouter>
        <BasketProvider>
          <Categories />
        </BasketProvider>
      </MemoryRouter>,
    );

    const links = await screen.findAllByRole('link');
    expect(links).toHaveLength(4);
  });

  it('Displays category names', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <BasketProvider>
            <Categories />
          </BasketProvider>
        </MemoryRouter>,
      );
    });

    categories.forEach(async (category) => {
      expect(
        await screen.findByText(capitaliseLetter(category)),
      ).toBeInTheDocument();
    });
  });
});
