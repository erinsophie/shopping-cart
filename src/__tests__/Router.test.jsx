import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import Router from '../components/Router';

describe('Page navigation', () => {
  beforeEach(() => {
    delete window.location;
  });

  it('Renders home for default route', async () => {
    window.location = new URL('http://localhost:5173');
    render(<Router />);
    expect(await screen.findByText(/fakestore/i)).toBeInTheDocument();
  });

  it('Renders correct category page when navigated to', async () => {
    window.location = new URL('http://localhost:5173/electronics');
    render(<Router />);
    expect(
      await screen.findByText('All electronics products'),
    ).toBeInTheDocument();

    cleanup();
  });

  it('Renders the correct product detail page', async () => {
    window.location = new URL('http://localhost:5173/electronics/9');
    render(<Router />);

    expect(
      await screen.findByText(
        'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Back to electronics')).toBeInTheDocument();

    cleanup();
  });
});

describe('Renders checkout and error pages correctly', () => {
  beforeEach(() => {
    delete window.location;
  });

  it('Renders checkout page when naviagted to', () => {
    window.location = new URL('http://localhost:5173/checkout');
    render(<Router />);
    expect(screen.getByText(/thank you for your order!/i)).toBeInTheDocument();

    cleanup();
  });

  it('Renders error page when given a bad url', () => {
    window.location = new URL('http://localhost:5173/565676');
    render(<Router />);
    expect(
      screen.getByText(/oops! this page does not exist/i),
    ).toBeInTheDocument();

    cleanup();
  });
});
