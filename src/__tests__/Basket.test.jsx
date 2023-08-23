import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BasketProvider } from '../components/BasketContext';
import Basket from '../components/Basket';
import { BrowserRouter } from 'react-router-dom';

// tests for basket component

describe('Render tests', () => {
  it('Basket intially renders with 0 products', () => {
    render(
      <BasketProvider>
        <Basket />
      </BasketProvider>,
    );

    expect(screen.getByText('Basket is empty')).toBeInTheDocument();
    expect(screen.getByText('0 items')).toBeInTheDocument();
  });
});

describe('Basket functions', () => {
  it('Removes item from basket', async () => {
    const mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 1 },
      { product: { id: 2, name: 'Test Product 2', price: 20 }, quantity: 2 },
    ];

    render(
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    // grab delete button
    const deleteButton = screen.getByTestId('delete-button-1');

    await user.click(deleteButton);
    // update basket contents
    const basketItems = screen.getAllByTestId('basket-item');

    // assertions
    expect(screen.queryByText('Test Product 1')).toBeNull();
    expect(basketItems.length).toBe(1);
  });

  it('Increments quantity of product', async () => {
    const mockBasket = [
      { product: { id: 1, name: 'Test Product 1', price: 10 }, quantity: 1 },
    ];

    render(
      <BrowserRouter>
        <BasketProvider initialBasket={mockBasket}>
          <Basket />
        </BasketProvider>
        ,
      </BrowserRouter>,
    );

    const user = userEvent.setup();
    const incrementButton = screen.getByTestId('increment-1');

    await user.click(incrementButton);
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('2 items')).toBeInTheDocument();

    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('4 items')).toBeInTheDocument();
  });
});
