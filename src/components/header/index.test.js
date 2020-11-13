import { render } from '@testing-library/react';
import Header from './';

test('Render Header', () => {
  render(<Header />);
  expect(true).toBeTruthy();
});
