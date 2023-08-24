import { describe, it, test, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductPage from '../pages/ProductPage';
import { RouterProvider } from 'react-router-dom';
import Router from '../components/Router';
import '@testing-library/jest-dom/extend-expect';

describe('Router', () => {
  beforeEach(() => {
    delete window.location;
  });

  test('Renders Home component for default route', () => {
    window.location = new URL('http://localhost:5173');
    render(<Router />);
    expect(
      screen.getByText(/an online marketplace for creative crafts!/i),
    ).toBeInTheDocument();
  });

  test('Renders home decor products page when navigated to', () => {
    window.location = new URL('http://localhost:5173/2');
    render(<Router />);
    expect(screen.getByText(/all home decor products/i)).toBeInTheDocument();
  });
});
