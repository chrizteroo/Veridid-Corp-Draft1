import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Assuming you have a global styles.css file
import './index.css';
import './App.css';
// Create a root element for your application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
