import ReactDOM from 'react-dom';
import React from 'react';
import dotenv from 'dotenv'
import path from 'path';
import App from './App';
import { Provider } from 'react-redux';
import {store} from "./storeRedax";
import { BrowserRouter } from 'react-router-dom';
// dotenv.config({path: path.join(__dirname, '/.env')})

console.log(process.env.REACT_APP_API_URL)



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
);

