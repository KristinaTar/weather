import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./reduxStore";
import AppContainer from "./AppContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer store={store} />

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
