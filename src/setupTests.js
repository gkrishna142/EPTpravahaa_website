// src/setupTests.js
import '@testing-library/jest-dom';

// Mock scrollTo so tests won't fail
window.scrollTo = jest.fn();
