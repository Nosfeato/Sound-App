
import React from 'react';

import uuidv4 from 'uuid/v4';
import Track from './Track';

class Playbacks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tracksList: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps.tracks);
    if (nextProps.tracks !== prevState.tracksList) {
      console.log('patate');
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
        {tracksList.map(track => (
          <Track key={`${track.name}_${uuidv4}`} track={track} />
        ))}
      </ul>
    );
  }
}

export default Playbacks;
