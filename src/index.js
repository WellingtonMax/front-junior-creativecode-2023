import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <Router>
        <App />
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
