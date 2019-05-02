
/**
 * Imports
 */
import { connect } from 'react-redux';
import Playbacks from 'src/components/App/Playbacks';

// Defines which global state values to transfer as props
const mapStateToProps = state => ({
  tracks: state.tracks_list,
});

/**
 * You are probably wondering why there is no "mapDispatchToProps" function
 * here. This function is actualy optional as connect doesn't need it.
 *
 * You might now ask yourself 'if its not needed why' put "null" instead ?
 * Indeed that isn't needed either however mapStateToProps is replaceable with
 * null. It would be a little weird if we didn't do the same with
 * "mapDispatchToProps" when we arn't dispatching any actions. It would work,
 * but it is just better to put it as the code becomes clearer that way for
 * inexperienced developers.
 */
const PlaybacksProvider = connect(
  mapStateToProps,
  null,
)(Playbacks);

// Container export
export default PlaybacksProvider;
