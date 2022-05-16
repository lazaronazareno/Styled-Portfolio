import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/Futura-CondensedLight.otf'
import './fonts/Futura-Bold.ttf'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MouseContextProvider from "./libs/mouseContext";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
