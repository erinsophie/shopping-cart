import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BasketProvider } from '../components/BasketContext';
import Categories from '../components/Categories';
import categories from '../data/categories';

describe('Render tests', () => {
  let container;

  beforeEach(() => {
    const { container: renderedContainer } = render(
      <MemoryRouter>
        <BasketProvider>
          <Categories />
        </BasketProvider>
      </MemoryRouter>,
    );

    container = renderedContainer;
  });

  // snapshot
  it('Matches snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Renders the main tagline correctly', () => {
    const mainText = screen.getByText(
      'An online marketplace for creative crafts!',
    );
    expect(mainText).toBeInTheDocument();
  });

  it('Renders correct amount of links', () => {
    const links = screen.getAllByRole('link');
    expect(links.length).toBe(categories.length);
  });

  it('Each Link has correct href attribute', () => {
    categories.forEach((category) => {
      const link = screen.getByRole('link', { name: category.name });
      expect(link).toHaveAttribute('href', `/${category.id}`);
    });
  });

  it('Passes the correct props to CategoryPreview', () => {
    // mock category preview page
    vi.mock('../components/CategoryPreview', () => {
      return {
        default: function MockCategoryPreview({ src, name }) {
          return (
            <div data-testid="mock-category-preview">
              <img src={src}></img>
              <p>{name}</p>
            </div>
          );
        },
      };
    });

    const previews = screen.getAllByTestId('mock-category-preview');
    expect(previews.length).toBe(categories.length);

    categories.forEach((category, index) => {
      const mockPreview = previews[index];

      expect(mockPreview.querySelector('img')).toHaveAttribute(
        'src',
        category.image,
      );
      expect(mockPreview.querySelector('p').textContent).toBe(category.name);
    });
  });
});
