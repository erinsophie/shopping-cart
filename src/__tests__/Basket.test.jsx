import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BasketProvider, useBasket } from '../components/BasketContext';
import userEvent from '@testing-library/user-event';
import Basket from '../components/Basket';
import ProductDetail from '../pages/ProductDetail';

describe('Render tests', () => {
  // snapshot
  it('Matches snapshot', () => {
    const { container } = render(
      <BasketProvider>
        <Basket />
      </BasketProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Initially renders with 0 items in basket', () => {
    render(
      <BasketProvider>
        <Basket />
      </BasketProvider>,
    );

    expect(screen.getByText('Basket is empty')).toBeInTheDocument();
    expect(screen.getByText('0 items')).toBeInTheDocument();
    expect(screen.getByText('Subtotal: £0.00')).toBeInTheDocument();
  });
});

describe('Increment and decrement buttons', () => {
  let user;
  let mockBasket;

  beforeEach(() => {
    user = userEvent.setup();
    mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 3 },
    ];

    render(
      <MemoryRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </MemoryRouter>,
    );
  });

  it('Must render 2 buttons per item to increment and decrement', () => {
    const incrementButton = screen.getAllByRole('button', { name: '+' });
    const decrementButton = screen.getAllByRole('button', { name: '-' });

    expect(incrementButton).toHaveLength(1);
    expect(decrementButton).toHaveLength(1);
  });

  it('Increments quantity of product', async () => {
    const incrementButton = screen.getByRole('button', { name: '+' });

    await user.click(incrementButton);
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('4 items')).toBeInTheDocument();

    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText('6')).toBeInTheDocument();
    expect(screen.getByText('6 items')).toBeInTheDocument();
  });

  it('Decrements quantity of product', async () => {
    const decrementButton = screen.getByRole('button', { name: '-' });
    await user.click(decrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('2 items')).toBeInTheDocument();
  });

  it('Removes item from basket when quantity is 1 and decrement is clicked', async () => {
    const decrementButton = screen.getByRole('button', { name: '-' });

    await user.click(decrementButton);
    await user.click(decrementButton);
    await user.click(decrementButton);
    expect(screen.getByText('Basket is empty')).toBeInTheDocument();
    expect(screen.queryByText('Test Product 1')).toBeNull();
  });
});

describe('Basket buttons', () => {
  let user;
  let mockBasket;

  beforeEach(() => {
    user = userEvent.setup();
    mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 3 },
    ];

    render(
      <MemoryRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </MemoryRouter>,
    );
  });

  it('Closes basket when x is clicked', async () => {
    const closeBasketBtn = screen.getByTestId('close-basket-btn');

    // before clicking the x
    expect(screen.getByText('Your basket')).toBeInTheDocument();

    // after clicking the x
    await user.click(closeBasketBtn);
    expect(screen.queryByText('Your Basket')).toBeNull();
  });

  it('Removes item from basket', async () => {
    const deleteButton = screen.getByTestId('delete-button-1');
    await user.click(deleteButton);
    expect(screen.queryByText('Test Product 1')).toBeNull();
    expect(screen.getByText('Basket is empty')).toBeInTheDocument();
  });

  it('Does not render checkout button when there are 0 items in basket', async () => {
    const deleteButton = screen.getByTestId('delete-button-1');
    await user.click(deleteButton);
    expect(screen.queryByText('Checkout')).toBeNull();
  });
});

// handling multiple products in basket
describe('Multiple product rednering', () => {
  let user;
  let mockBasket;

  beforeEach(() => {
    user = userEvent.setup();
    mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 3 },
      { product: { id: 2, name: 'Test Product 2', price: 20 }, quantity: 1 },
      { product: { id: 3, name: 'Test Product 3', price: 30 }, quantity: 2 },
    ];

    render(
      <MemoryRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </MemoryRouter>,
    );
  });

  it('Renders correct amount of items', () => {
    const items = screen.getAllByTestId('basket-item');
    expect(items.length).toBe(3);
  });

  it('Correctly calculates subtotal', async () => {
    const subtotal = screen.getByTestId('subtotal');
    expect(subtotal.textContent).toMatch('Subtotal: £110.00');

    // calculate subtotal again after deleting an item
    const deleteButton = screen.getByTestId('delete-button-3');
    await user.click(deleteButton);
    expect(subtotal.textContent).toMatch('Subtotal: £50.00');
  });

  it('Correctly shows quantity of items', () => {
    const amountOfItems = screen.getByTestId('items-amount');
    expect(amountOfItems.textContent).toMatch('6 items');
  });
});

// it's not a part of the basket components responsibilities to add items
// but this is to check if the basket registers when an item is added
describe('Adds item to basket', () => {

  it('Adds item to basket', async () => {
    let user = userEvent.setup();

    // create mock of product detail component
    vi.mock('../pages/ProductDetail', () => {
      return {
        default: function MockProductPage() {
          const { addToBasket } = useBasket();
          const mockProduct = { id: 1, name: 'Test Product 1', price: 10 };

          return (
            <div>
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
          <ProductDetail />
          <Basket />
        </BasketProvider>
        ,
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: 'Add to basket' });
    await user.click(button);
    await user.click(button);
    await user.click(button);
    const items = screen.getAllByTestId('basket-item');
    
    // 1 item with quantity 3
    expect(items.length).toBe(1);
    expect(screen.getByText('3 items')).toBeInTheDocument();
  });
});
