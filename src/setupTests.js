import { render } from '@testing-library/react';
import App from './App';
import { useEffect } from 'react'; // inside component only

test('renders App component', () => {
  render(<App />);
});
