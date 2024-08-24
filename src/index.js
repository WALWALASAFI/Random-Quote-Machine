import React from 'react'; // Needed for React 16 and earlier
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Ensure you have some global CSS, if ne

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
