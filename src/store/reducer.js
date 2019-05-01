/**
 * This constant is used in our reducer, to ensure all components needing a base value will render
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
const DELETE_TRACK_FROM_LIST = 'DELETE_TRACK_FROM_LIST';


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

    case DELETE_TRACK_FROM_LIST:
      console.log(state.tracks_list[1]);
      return {
        ...state,
        tracks_list: state.tracks_list.splice(action.index, 1),
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

export const deleteTrackFromList = index => ({
  type: DELETE_TRACK_FROM_LIST,
  index,
});


export default reducer;
