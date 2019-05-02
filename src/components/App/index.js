/**
 * Yarn / Npm imports
 */

// We need this otherwise we can't write jsx or create a React.Component class
import React from 'react';

/**
 * Local imports
 */
// Here we import our components or containers when the container is defined.
import Uploads from 'src/containers/Uploads';
import Playbacks from 'src/containers/Playbacks';

import './app.scss';


// We create a class named Uploads and give it the Component class making it an Uploads component.
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
