import React from 'react';
import ReactDOM from 'react-dom';
import App from './Context/App';
import { ThemeContextProdivder } from './Context/themeContext';

ReactDOM.render(
  <ThemeContextProdivder>
    <App />
  </ThemeContextProdivder>,
  document.getElementById('root')
);
