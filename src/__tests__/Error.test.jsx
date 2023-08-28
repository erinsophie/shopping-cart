import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Error from '../pages/Error';

describe('Error page tests', () => {
  let container

  beforeEach(() => {
    const { container: renderedContainer } = render(
      <MemoryRouter>
        <Error />
      </MemoryRouter>
    );

    container = renderedContainer
  });

  it('Matches the snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('Displays the error message', () => {
    const errorMessage = screen.getByText('Oops! This page does not exist');
    expect(errorMessage).toBeInTheDocument();
  });

  it('Displays link to go back to the Home page', () => {
    const link = screen.getByRole('link', { name: /go back to home page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});