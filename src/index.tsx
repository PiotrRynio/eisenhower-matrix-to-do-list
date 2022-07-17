import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'views';
import { AllAppProviders } from './providers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllAppProviders>
        <App />
      </AllAppProviders>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
