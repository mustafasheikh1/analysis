import { render } from '@testing-library/react';
import Temperature from './';

test('renders App', () => {
  render(<Temperature />);
  expect(true).toBeTruthy();
});
