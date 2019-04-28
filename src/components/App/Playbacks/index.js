
import React from 'react';

import uuidv4 from 'uuid/v4';
import Track from './Track';
import OverallTracksManager from './OverallTracksManager';

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
    else { 
      return null;
    }
  }

  render() {
    const { tracksList } = this.state;
    console.log(tracksList);
    return (
      <ul id="playbacks">
        {tracksList[1] != null ? <OverallTracksManager /> : null }
        {tracksList.map(track => (
          <Track key={`${track.name}_${uuidv4}`} track={track} />
        ))}
      </ul>
    );
  }
}

export default Playbacks;
