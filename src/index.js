import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'modern-normalize/modern-normalize.css';

import App from './components/App';



ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);


