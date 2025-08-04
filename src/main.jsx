//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// PWA 등록
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./serviceWorker/service-worker.js')
      .then(reg => {
        console.log('✅ Service Worker registered:', reg.scope);
      })
      .catch(err => {
        console.error('❌ SW registration failed:', err);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
