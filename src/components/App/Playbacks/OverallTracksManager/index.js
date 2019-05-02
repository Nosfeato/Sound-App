/**
 * NPM / Yarn imports
 */
import React from 'react';


/**
 * Local imports
 */

import './overallTracksManager.scss';


/**
 * Component
 */
class OverallTracksManager extends React.Component {

  state = {
    playing: false,
  }

  /**
   * Handlers
   */
  playAllTracks = () => {
    const tracks = document.getElementsByClassName('track__player');
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

  resetAllTracks = () => {
    const tracks = document.getElementsByClassName('track__player');
    for (let x = 0; x < tracks.length; x += 1) {
      tracks[x].currentTime = 0;
      this.pauseAllTracks();
    }
    this.setState({ playing: false });
  }


  render() {
    const { playing } = this.state;
    return (
      <div id="generalTrackManager">
        <button type="button" className={`overall__button ${playing === true ? 'yellow' : 'grey'}`} onClick={this.playAllTracks}> PLAY </button>
        <button type="button" className={`overall__button ${playing === false ? 'yellow' : 'grey'}`} onClick={this.pauseAllTracks}> PAUSE </button>
        <button type="button" className="overall__button grey" onClick={this.resetAllTracks}> RESET </button>
      </div>
    );
  }
}

/**
 * Export
 */
export default OverallTracksManager;
