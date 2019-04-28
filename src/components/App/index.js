/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */

// Relative type imports to anticipate and facilitate project restructuring.
import Uploads from 'src/containers/Uploads';
import Playbacks from 'src/containers/Playbacks';


import './app.scss';


/**
 * Code
 */

// Class instead of function in order to anticipate further App modifications.
class App extends React.Component {

  render() {
    return (
      <div id="app">
        <Uploads />
        <Playbacks />
      </div>
    );
  }
};

/**
 * Export
 */
export default App;
