import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Router from '../components/Router';
import allProducts from '../data/products';
import categories from '../data/categories';

describe('Product page and product detail page', () => {
  beforeEach(() => {
    delete window.location;
  });

  it('Renders header, home and footer components for default route', () => {
    window.location = new URL('http://localhost:5173');
    render(<Router />);
    expect(
      screen.getByText(/an online marketplace for creative crafts!/i),
    ).toBeInTheDocument();
  });

  it('Renders correct category page when navigated to', () => {
    categories.forEach((category) => {
      window.location = new URL(`http://localhost:5173/${category.id}`);
      render(<Router />);
      expect(
        screen.getByText(`All ${category.name} products`),
      ).toBeInTheDocument();

      cleanup();
    });
  });

  it('Renders the correct product detail page for each product in every category', () => {
    categories.forEach((category) => {
      const productsInCategory = allProducts.filter(
        (product) => product.categoryId === category.id,
      );

      productsInCategory.forEach((product) => {
        window.location = new URL(
          `http://localhost:5173/${category.id}/${product.id}`,
        );

        render(<Router />);
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(product.description)).toBeInTheDocument();
        expect(
          screen.getByText(`Back to ${category.name}`),
        ).toBeInTheDocument();

        cleanup();
      });
    });
  });

  describe('Renders checkout and error pages correctly', () => {
    beforeEach(() => {
      delete window.location;
    });

    it('Renders checkout page when naviagted to', () => {
      window.location = new URL('http://localhost:5173/checkout');
      render(<Router />);
      expect(
        screen.getByText(/thank you for your order!/i),
      ).toBeInTheDocument();
    });

    it('Renders error page when given a bad url', () => {
      window.location = new URL('http://localhost:5173/565676');
      render(<Router />);
      expect(
        screen.getByText(/oops! this page does not exist/i),
      ).toBeInTheDocument();
    });

    it('Renders error page when product is not found', () => {
      window.location = new URL('http://localhost:5173/1/745674');
      render(<Router />);
      screen.debug();
      expect(
        screen.getByText(/oops! this product does not exist/i),
      ).toBeInTheDocument();
    });
  });
});
