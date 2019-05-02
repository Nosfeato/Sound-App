
import { createStore } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';


/**
 * Store
 *
 *  The eslint comments bellow are there to disable some default correction functions
 *  so the correct code to enable Redux Devtools doesn't look like a christmas tree (with
 *  green and red everywhere).
 */

/* eslint-disable no-underscore-dangle */

// This code creates a state based on the information given by the reducer. It also allows us to debug Redux using its devtools.
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

/**
 * Export
 */
export default store;
