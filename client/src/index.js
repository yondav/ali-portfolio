import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { AdminProvider } from './context/AdminContext';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
