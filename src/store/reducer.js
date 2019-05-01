
const initialState = {
  tracks_list: [],
};

const ADD_TO_TRACKS_LIST = 'ADD_TO_TRACKS_LIST';
const DELETE_TRACK_FROM_LIST = 'DELETE_TRACK_FROM_LIST';


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
