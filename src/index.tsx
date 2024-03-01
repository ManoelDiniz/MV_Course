import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './app/styles/global';
import reportWebVitals from './reportWebVitals';
import { App } from './app/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


reportWebVitals();
