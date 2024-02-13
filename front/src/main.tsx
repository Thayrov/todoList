import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CustomStore from './store/StoreProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomStore>
      <App />
    </CustomStore>
  </React.StrictMode>,
);
