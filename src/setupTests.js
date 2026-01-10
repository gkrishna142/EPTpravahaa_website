// setupTests.js
import '@testing-library/jest-dom';
import { useEffect } from 'react'; // << Add this line

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
