
import { connect } from 'react-redux';

import Track from 'src/components/App/Playbacks/Track';

import { deleteTrackFromList } from 'src/store/reducer';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  deleteTrack: (trackIndex) => {
    dispatch(deleteTrackFromList(trackIndex));
  },
});


const PlaybacksProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Track);


export default PlaybacksProvider;
