import { render, screen } from '@testing-library/react';
import AboutMePage from './AboutMePage';

describe('AboutMePage | component | unit test', () => {
  it('should render with success', () => {
    render(<AboutMePage />);

    expect(screen.getByText('AboutMePage')).toBeInTheDocument();
  });
});
