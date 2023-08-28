import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductPage from '../pages/ProductPage';
import { useParams } from 'react-router-dom';
import allProducts from '../data/products';
import { MemoryRouter } from 'react-router-dom';

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
    render(
      <MemoryRouter>
        <ProductPage />
      </MemoryRouter>,
    );

    // product objects
    const expectedProducts = allProducts.filter(
      (product) => product.categoryId === 1,
    );

    // preview components
    const productPreviews = screen.getAllByTestId('product-preview');

    // check length
    expect(productPreviews.length).toBe(expectedProducts.length);

    // check if the expected product details are displayed
    expectedProducts.forEach((product, index) => {
      const component = productPreviews[index];

      // check img
      expect(component.querySelector('img')).toHaveAttribute(
        'src',
        product.image,
      );
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(`£${product.price}`)).toBeInTheDocument();
    });
  });
});
