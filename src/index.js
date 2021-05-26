import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JSX from './components/ejercicioCuatro';
import Doce from './components/ejercicioDoce';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  JSX,
  document.getElementById('challenge-node')
);

ReactDOM.render(
  Doce,
  document.getElementById('challenge-node 2')
);