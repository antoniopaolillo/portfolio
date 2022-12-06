import { render, screen } from '@testing-library/react';
import ProjectsPage from './ProjectsPage';

describe('ProjectsPage | component | unit test', () => {
  it('should render with success', () => {
    render(<ProjectsPage />);

    expect(screen.getByText('ProjectsPage')).toBeInTheDocument();
  });
});
