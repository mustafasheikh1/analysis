import { render } from '@testing-library/react';
import AirPressure from './';

test('Render Air Pressure', () => {
  render(<AirPressure />);
  expect(true).toBeTruthy();
});
