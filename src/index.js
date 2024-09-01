import React from 'react'; // Needed for React 17+ and later
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure you have some global CSS, if needed

console.log(App); // Temporary usage to avoid eslint error

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'), // Added trailing comma
);
