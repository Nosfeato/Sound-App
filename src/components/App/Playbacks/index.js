
/**
 * NPM / Yarn imports
 */

import React from 'react';
import uuidv4 from 'uuid/v4';

/**
 * Local imports
 */

// local components imports;
import Track from 'src/containers/Track';
import OverallTracksManager from './OverallTracksManager';

// Local css imports
import './playbacks.scss';


/**
 * Component
 */
class Playbacks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracksList: null,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tracks !== prevState.tracksList) {
      return { tracksList: nextProps.tracks };
    }
    // getDerivedStateFromProps needs a default return even if it is null therefor:
    else { 
      return null;
    }
  }

  render() {
    const { tracksList } = this.state;
    console.log(tracksList);
    return (
      <div id="playbacks">
        {tracksList[1] != null ? <OverallTracksManager /> : null }
        <ul id="playbacks__list">
          {tracksList.map((track, index) => (
            <Track key={`${track.name}_${uuidv4()}`} trackNumber={index} track={track} />
          ))}
        </ul>
      </div>
    );
  }
}


/**
 * Export
 */

export default Playbacks;
