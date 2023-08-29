import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { BasketProvider, useBasket } from '../components/BasketContext';
import App from '../App';
import Header from '../components/Header';
import ProductDetail from '../pages/ProductDetail';

describe('Header component', () => {
  let user;
  beforeEach(() => {
    user = userEvent.setup();
  });

  // snapshot
  it('Matches snapshot', () => {
    const { container } = render(
      <MemoryRouter>
        <BasketProvider>
          <Header />
        </BasketProvider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Clicking on the basket opens the basket display', async () => {
    render(
      <MemoryRouter>
        <BasketProvider>
          <App />
        </BasketProvider>
      </MemoryRouter>,
    );

    const basket = screen.getByTestId('basket-icon');
    await user.click(basket);
    expect(screen.getByText('Your basket')).toBeInTheDocument();
  });

  it('Adding an item updates the basket quantity', async () => {
    // create mock of product detail component
    vi.mock('../pages/ProductDetail', () => {
      return {
        default: function MockProductPage() {
          const { addToBasket } = useBasket();
          const mockProduct = { id: 1, name: 'Test Product 1', price: 10 };

          return (
            <div>
              <p>{mockProduct.name}</p>
              <button onClick={() => addToBasket(mockProduct)}>
                Add to basket
              </button>
            </div>
          );
        },
      };
    });

    render(
      <MemoryRouter>
        <BasketProvider>
          <Header />
          <ProductDetail />
        </BasketProvider>
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: 'Add to basket' });
    await user.click(button);
    const basketQuantity = screen.getByTestId('basket-quantity');
    expect(basketQuantity.textContent).toBe('1');
  });
});
