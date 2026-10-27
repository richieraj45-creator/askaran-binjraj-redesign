import React from 'react';
import ReactDOM from 'react-dom/client';
import './storefront.css'; // Connects your custom design system and Tailwind layers
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);