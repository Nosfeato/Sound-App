/**
 * NPM / YARN import
 */

import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

import 'src/styles/index.scss';


/**
 * Render
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);


const target = document.getElementById('root');


render(rootComponent, target);
