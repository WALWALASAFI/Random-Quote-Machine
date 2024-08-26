import React from 'react'; // Needed for React 17+ and later
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure you have some global CSS, if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Add trailing comma if needed by eslint
);
