/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */

import Uploads from 'src/containers/Uploads';
import Playbacks from 'src/containers/Playbacks';


import './app.scss';


// App jsx layout
class App extends React.Component {

  handleDrop = (event) => {
    event.preventDefault();
    const file = event.target.dataTransfer.items;
    console.log(file);
  }

  render() {
    return (
      <div id="app" onDrop={this.handleDrop}>
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
