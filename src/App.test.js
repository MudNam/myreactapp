import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World text', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello world/i);
  expect(headingElement).toBeInTheDocument();
});
