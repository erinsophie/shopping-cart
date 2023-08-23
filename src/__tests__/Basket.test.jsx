import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BasketProvider } from '../components/BasketContext';
import Basket from '../components/Basket';
import { BrowserRouter } from 'react-router-dom';
import { useBasket } from '../components/BasketContext';

// tests for basket component

// initial render tests
describe('Initial render', () => {
  it('Basket intially renders with 0 products', () => {
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

// increment and decrement button tests
describe('Increment and decrement buttons', () => {
  let user;
  let mockBasket;

  beforeEach(() => {
    user = userEvent.setup();
    mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 3 },
    ];

    render(
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
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

// other basket features
describe('Basket buttons', () => {
  let user;
  let mockBasket;

  beforeEach(() => {
    user = userEvent.setup();
    mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 3 },
    ];

    render(
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
    );
  });

  it('Closes basket when x is clicked', async () => {
    const closeBasketBtn = screen.getByTestId('close-basket-btn');

    // before clicking the x
    expect(screen.getByText('Your basket')).toBeInTheDocument();

    // after clicking the x
    await user.click(closeBasketBtn);
    expect(screen.queryByText('Basket')).toBeNull();
  });

  it('Removes item from basket', async () => {
    const deleteButton = screen.getByTestId('delete-button-1');
    await user.click(deleteButton);
    expect(screen.queryByText('Test Product 1')).toBeNull();
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
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
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

// it's not a part of the basket's responsibilities to add items
// but this is to check if the basket registers when an item is added
describe('Adds item to basket', () => {
  it('Adds item to basket', async () => {
    let user = userEvent.setup();
    const mockProduct = { id: 1, name: 'Homework Planner', price: 12.99 };
    let mockBasket = [];

    // mock product detail page because that's where the button would be
    function MockProductPage() {
      const { addToBasket, basket } = useBasket();
      mockBasket = basket;

      return (
        <div>
          <p>{mockProduct.name}</p>
          <button onClick={() => addToBasket(mockProduct)}>
            Add to basket
          </button>
        </div>
      );
    }

    render(
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <MockProductPage />
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
    );

    const button = screen.getByRole('button', { name: 'Add to basket' });
    await user.click(button);
    const items = screen.getAllByTestId('basket-item');

    expect(items.length).toBe(1);
  });
});