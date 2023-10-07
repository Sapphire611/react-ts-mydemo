import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// 不取消严格模式，useEffect中的代码会执行2次 = =
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);