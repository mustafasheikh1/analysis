import { render } from '@testing-library/react';
import Humidily from './';

test('Eenders Humidi', () => {
  render(<Humidily />);
  expect(true).toBeTruthy();
});
