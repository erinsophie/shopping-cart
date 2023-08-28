import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import { useParams } from 'react-router-dom';
import allProducts from '../data/products';
import categories from '../data/categories';
import { BasketProvider } from '../components/BasketContext';

// mock react-router-dom in order to mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('<ProductDetail />', () => {
  it('renders ProductDetail page correctly', () => {
    // set mock return value for useParams
    useParams.mockReturnValue({ categoryId: '1', productId: '10' });

    // render product detail page
    const { container } = render(
      <MemoryRouter>
        <BasketProvider>
          <ProductDetail />
        </BasketProvider>
      </MemoryRouter>,
    );

    // snapshot
    expect(container).toMatchSnapshot();

    // get product object
    const product = allProducts.find((product) => product.id === 10);
    const category = categories.find((category) => category.id === 1);

    // component
    const component = screen.getByTestId('product-detail-page');

    // test props data rendering
    expect(component.querySelector('img')).toHaveAttribute(
      'src',
      product.image,
    );
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`£${product.price}`)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(
      product.highlights.length,
    );

    // link
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent(`Back to ${category.name}`);
  });
});
