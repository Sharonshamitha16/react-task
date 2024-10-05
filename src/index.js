import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import RouterEx from './RouterEx'
import RoutersUi from './task-03-10-24/RoutersUi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App /> */}
    {/* <RouterEx/> */}
    <RoutersUi />
  </BrowserRouter>
);

