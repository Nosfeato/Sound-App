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
 * rootComponent defines what our web-app is made of. In our case Redux (Provider) and our App component.
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

// We need a target for our rootComponent, a place where it will be added to inside our HTML.
const target = document.getElementById('root');

// This places our rootComponent inside our target. In other words we have now linked React to our index.html
render(rootComponent, target);
