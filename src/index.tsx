import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'
import App from './App';
import { AppStateProvider } from './context/AppStateContext';

ReactDOM.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>,
  document.getElementById('root')
);