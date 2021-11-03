import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import Toggle from './components/ThemeToggle/ThemeToggle';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <Toggle />
        </div>
        <App />
    </ThemeProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
