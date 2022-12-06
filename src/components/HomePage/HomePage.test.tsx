import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage | component | unit test', () => {
  it('should render with success', () => {
    render(<HomePage />);

    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});
