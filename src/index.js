import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import App from './App';
import './index.css';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
