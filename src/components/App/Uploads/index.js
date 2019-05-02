
/**
 * Yarn / NPM Imports
 */
import React from 'react';

/**
 * Local imports
 */
import './uploads.scss';


class Uploads extends React.Component {

  /** We use our props from our container to access the
   *  reducer "addToTracksList" action.
   *  You might find it weird since we arn't importing
   *  anything, but thats the magic of the "Connect"
   *  function in our containers. As our container
   *  becomes the last link to our App, and not
   *  our component anymore, its not the component
   *  but the CONTAINER that needs the imports, and as
   *  you have seen, we did import Uploads in our
   *  container. So everything works !
   */

  /**
   * Handler
   */
  addTrack = (event) => {
    const { addToTracksList } = this.props;
    const file = event.target.files[0];
    const filePath = window.URL.createObjectURL(file);
    const { name } = file;
    addToTracksList(name, filePath);
    event.target.value = null;
  }


  render() {
    return (
      <>
        <input id="file-input" type="file" onChange={this.addTrack} />
      </>
    );
  }
}

export default Uploads;
