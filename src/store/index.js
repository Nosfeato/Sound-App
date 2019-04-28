
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
  compose,
);


/* eslint-enable */

/**
 * Export
 */
export default store;
