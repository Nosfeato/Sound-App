/**
 * NPM / Yarn imports
 */

import React from 'react';

/**
 * Local imports
 */
import './track.scss';


/**
 * Component
 */
class Track extends React.Component {

  constructor() {
    super();
    this.audioRef = React.createRef();
    this.state = {
      play: false,
      timer: 0,
    };
  }

  componentWillMount() {
    this.trackNumber = this.props.trackNumber;
  }

  componentDidMount() {
    this.audio = this.audioRef.current;
  }


  /**
   * Component functions
   */
  changeTrackVolume = (event) => {
    const input = (event.target.value / 100);
    this.audio.volume = input;
  }

  updateTime = () => {
    const currentSeconds = (Math.floor(this.audio.currentTime % 60) < 10 ? '0' : '') + Math.floor(this.audio.currentTime % 60);
    const currentMinutes = Math.floor(this.audio.currentTime / 60);
    const slider = document.getElementById(`track__${this.trackNumber}__duration`);
    const timer = document.getElementById(`track__${this.trackNumber}__timer`);

    // Sets the current song location compared to the song duration.
    timer.textContent = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(this.audio.duration / 60) + ":" + (Math.floor(this.audio.duration % 60) < 10 ? '0' : '') + Math.floor(this.audio.duration % 60);

    // Fills out the slider with the appropriate position.
    const percentageOfSong = (this.audio.currentTime / this.audio.duration);
    const percentageOfSlider = slider.offsetWidth * percentageOfSong;

    // Updates the track progress div.
    slider.value = Math.round(percentageOfSlider);
  }


  /**
   * Store state handlers
   */
  handleDelete = () => {
    const { deleteTrack } = this.props;
    deleteTrack(this.trackNumber);
  }

  handleClick = () => {
    console.log(this.audio.currentTime);
    if (this.state.play === false) {
      this.audio.play();
      this.setState({ play: true });
    }
    else {
      this.audio.pause();
      this.setState({ play: false });
    }
  }


  render() {
    const { track } = this.props;
    const { name, path } = track;
    //
    return (
      <li className="track">
        <div className="track__manager">
          <h3 className="track__name">{name}</h3>
          <div className="track__configurations">
            <ul className="track__buttons">
              <li>
                <button type="button" className="track__delete" onClick={this.handleDelete}> DELETE </button>
                <button type="button" className="track__switch" onClick={this.handleClick}> {this.state.play === false ? 'Play' : 'Pause'} </button>
              </li>
            </ul>
            <div className="track__volume">
              <span className="track__volume__identifier">Volume :</span>
              <input type="range" min="0" max="100" name="volume" list="tickmarks" className="track__volume__input" onChange={this.changeTrackVolume} />
              <datalist id="tickmarks">
                <option value="0" label="0%" />
                <option value="10" />
                <option value="20" />
                <option value="30" />
                <option value="40" />
                <option value="50" label="50%" />
                <option value="60" />
                <option value="70" />
                <option value="80" />
                <option value="90" />
                <option value="100" label="100%" />
              </datalist>
            </div>
          </div>
        </div>
        <div className="track__display">
          <audio ref={this.audioRef} id={`track__${this.trackNumber}`} className="track__player" onTimeUpdate={this.updateTime}>
            <source src={path} type="audio/mpeg" />
            <track src={name} kind="captions" />
          </audio>
          <input type="range" min="0" max="100" defaultValue="0" name="Audio timer" id={`track__${this.trackNumber}__duration`} />
          <span id={`track__${this.trackNumber}__timer`} />
        </div>
      </li>
    );
  }
}


/**
 * Export
 */
export default Track;
