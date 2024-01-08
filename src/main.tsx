import './index.scss';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import './assets/fonts/Roboto/Roboto-Medium.ttf';
import './assets/fonts/Roboto/Roboto-Bold.ttf';
import './assets/fonts/Roboto-Mono/RobotoMono-Regular.ttf';
import './assets/fonts/Roboto-Mono/RobotoMono-Medium.ttf';
import './assets/fonts/Roboto-Mono/RobotoMono-Bold.ttf';
import './assets/fonts/SourceSerifPro/SourceSerifPro-Regular.otf';
import './assets/fonts/SourceSerifPro/SourceSerifPro-Bold.otf';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
