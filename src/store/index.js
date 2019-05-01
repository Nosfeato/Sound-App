
import { createStore, compose } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';


/**
 * Store
 */


/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


/* eslint-enable */

/**
 * Export
 */
export default store;
