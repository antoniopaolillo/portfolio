import { render, screen } from '@testing-library/react';
import ResumePage from './ResumePage';

describe('ResumePage | component | unit test', () => {
  it('should render with success', () => {
    render(<ResumePage />);

    expect(screen.getByText('ResumePage')).toBeInTheDocument();
  });
});
