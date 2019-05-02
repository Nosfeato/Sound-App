/**
 * This "initialState" constant is used in our reducer, to ensure all components needing a base value will render
 
 * You will notice the state property tracks_list has an undescore instead of a camelCase writting.
 * Though this practice is questionable, I find it makes it easier to track what belongs to the store
 * state and what belongs to the component state, as well as when a value changes from being globally
 * accessible de locally accessible. tracks_list for exemple stays that way until it is added to the
 * Playbacks.js where it is transformed into a local "tracks" variable. It also makes it much clearer
 * if a developper knows how to properly use Redux or not, as a lot of new Redux users tend to
 * copy and paste the same variables from reducer to container to component without understanding
 * the flow of the variables, making them lose time in the testing process afterwords (since they
 * arn't confortable in changing the code as they don't understand it).
 */

const initialState = {
  tracks_list: [],
};

/**
 * This might look like a useless couple of lines but it actualy prepares this app for future API requests.
 * All we will need to do is export the following constants and use them in our "Middleware folder" (which
 * we don't have yet as we arn't making any API requests)
 */
const ADD_TO_TRACKS_LIST = 'ADD_TO_TRACKS_LIST';


/**
 * 
 * This function is the most crucial part of our store
 * as its our store state manager. Every time a general
 * information should be updated/created, thats where it will
 * be done.
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TO_TRACKS_LIST:
      return {
        ...state,
        tracks_list: state.tracks_list.concat({ name: action.name, path: action.path }),
      };

    default:
      return state;
  }
};

/**
 * 
 * Declaration of our actions. So far none of the constants and functions
 * we have declared interact with each other. So its normal if you get the
 * impression none of those are linked. However with the exports we are about
 * to do and the containers, all the blocks will fit into place.
 * 
 * So here is a list of available actions for our reducer. The choice of
 * "which one will be used" will be determined in the component
 */
export const addToTracksList = (name, path) => ({
  type: ADD_TO_TRACKS_LIST,
  name,
  path,
});

/**
 * Reducer export
 */
export default reducer;
