/**
 * NPM import
 */
import React from 'react';
/**
 * Local import
 */

import './overallTracksManager.scss';
/**
 * Code
 */

// Class instead of function in order to anticipate further App modifications.
class OverallTracksManager extends React.Component {

  state = {
    playing: false,
  }

  playAllTracks = () => {
    const tracks = document.getElementsByClassName('track__player');
    console.log(tracks);
    console.log(tracks[0]);

    for (let x = 0; x < tracks.length; x += 1) {
      tracks[x].play();
    }
    this.setState({ playing: true });
  }

  pauseAllTracks = () => {
    const tracks = document.getElementsByClassName('track__player');


    for (let x = 0; x < tracks.length; x += 1) {
      tracks[x].pause();
    }
    this.setState({ playing: false });
  }


  render() {
    const { playing } = this.state;
    return (
      <>
        <button type="button" className={`overall__button ${playing === true ? 'yellow' : 'grey'}`} onClick={this.playAllTracks}> PLAY </button>
        <button type="button" className={`overall__button ${playing === false ? 'yellow' : 'grey'}`} onClick={this.pauseAllTracks}> PAUSE </button>
      </>
    );
  }
}

/**
 * Export
 */
export default OverallTracksManager;
