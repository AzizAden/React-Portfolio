import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps from './Apps';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>
);
