import { connect } from 'react-redux';

import Playbacks from 'src/components/App/Playbacks';


const mapStateToProps = state => ({
  tracks: state.tracks_list,
});

const mapDispatchToProps = dispatch => ({
});


const PlaybacksProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playbacks);


export default PlaybacksProvider;
