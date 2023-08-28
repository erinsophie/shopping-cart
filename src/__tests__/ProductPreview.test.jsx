import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductPage from '../pages/ProductPage';
import { useParams, MemoryRouter } from 'react-router-dom';
import allProducts from '../data/products';

// mock react-router-dom in order to mock useParams
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('<ProductPage />', () => {
  it('renders ProductPreview component with correct props based on params', () => {
    // set mock return value for useParams
    useParams.mockReturnValue({ categoryId: '1' });

    // by rendering the product page, we render all product previews for category 1
    const { container } = render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );

    // snapshot
    expect(container).toMatchSnapshot();

    // array of products
    const expectedProducts = allProducts.filter(
      (product) => product.categoryId === 1,
    );

    // preview components
    const productPreviews = screen.getAllByTestId('product-preview');

    // check amount of products rendered is correct
    expect(productPreviews.length).toBe(expectedProducts.length);

    // loop through array of expected products to check props
    expectedProducts.forEach((product, index) => {
      const component = productPreviews[index];

      expect(component.querySelector('img')).toHaveAttribute(
        'src',
        product.image,
      );
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`£${product.price}`)).toBeInTheDocument();
    });
  });
});
