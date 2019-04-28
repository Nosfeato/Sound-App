import React from 'react';
import './track.scss';

class Track extends React.Component {

  render () {

    const { track } = this.props;
    const { name, path } = track;
    
    return (
      <li className="track">
        <h3 className="track__name">{name}</h3>
        <audio controls>
          <source src={path} type="audio/mpeg" />
        </audio>
      </li>
    );
  }

}

export default Track;
