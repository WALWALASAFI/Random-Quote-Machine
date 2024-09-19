/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App';
import './index.css'; // Ensure you have some global CSS, if needed

// eslint-disable-next-line no-console
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
