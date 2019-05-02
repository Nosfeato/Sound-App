/** We need the "connect" function to enhance our component with the variables (proper term is Props)
 *  from our store.
 */
import { connect } from 'react-redux';

// We import our component to be able to call it later.
import Uploads from 'src/components/App/Uploads';

/** We import all our actions from our reducer. 
 *  This line is optional as we don't always need actions in our components.
 *  In our particular case we need to be able to add file informations to
 *  our store's state, so we import "addToTracksList" which we created in
 *  our reducer. This function allows us to do exacly what we need.
 */
import { addToTracksList } from 'src/store/reducer';

/** This function is unecessary, but "connect" requires a
 *  first argument. Putting "null" inside "mapStateToProps" is uncessary as it
 *  would be a redundancy since we have nothing that is returned by
 *  "mapStateToProps". Putting null would be the same as saying:
 *  'In our function that returns nothing, please return nothing'.
 *  It is defenetly NOT a good practice despite what some people on
 *  internet might say. People who say that didn't read the Redux
 *  manual properly since the manual says to change the "connect" function
 *  NOT the returned value. You'll see a comment where the change should
 *  be made. I'm leaving the function here for the example, but this code
 *  should (for now at least) be deleted.
 */
const mapStateToProps = state => ({
});

/**
 * MapDispatchToProps returns all our actions imported from the reducer
 * and listed inside it. Here we only have one action assigned to a props
 * this action is "addToTracksList"(after dispatch) and it is assigned to the props
 * "addToTracksList" (first line). This is the reason why both need
 * the same amount of arguments.
 */
const mapDispatchToProps = dispatch => ({
  addToTracksList: (name, path) => {
    dispatch(addToTracksList(name, path));
  },
});

/**
 * THIS is where we put null. We use it to replace "mapStateToProps" which
 * would be there instead of we actualy had any state value to add to our
 * component "Uploads" props.
 * 
 * This function takes two arguments and enhances the "Uploads" component
 * with those arguments.
 */
const UploadsProvider = connect(
  null,
  mapDispatchToProps,
)(Uploads);

/**  We need to export this in order to be able to make our container the last
 *   part of the chain (see Redux explanation.png for more info).
 */
export default UploadsProvider;
