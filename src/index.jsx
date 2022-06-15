import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import "./user.js";

const rootElem = document.querySelector('#root');

ReactDOM.render(
  <App user={null} />,
  rootElem
);