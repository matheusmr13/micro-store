import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Store from './Store';
import { ImportMicrofrontend } from '@cmra/react';

ReactDOM.render(
  <ImportMicrofrontend>
    <Store />
  </ImportMicrofrontend>,
  document.getElementById('root')
);
