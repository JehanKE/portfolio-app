import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with Jehan Engineer branding and sections', () => {
  render(<App />);

  // Brand name in navbar or hero
  const brandElements = screen.getAllByText(/Jehan Engineer/i);
  expect(brandElements.length).toBeGreaterThan(0);

  // Senior Software Engineer role
  const roleElements = screen.getAllByText(/Senior Software Engineer/i);
  expect(roleElements.length).toBeGreaterThan(0);

  // Core navigation labels
  const expElements = screen.getAllByText(/Experience/i);
  expect(expElements.length).toBeGreaterThan(0);

  const skillsElements = screen.getAllByText(/Skills/i);
  expect(skillsElements.length).toBeGreaterThan(0);

  const projectsElements = screen.getAllByText(/Projects/i);
  expect(projectsElements.length).toBeGreaterThan(0);
});
