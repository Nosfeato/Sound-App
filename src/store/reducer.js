
const initialState = {
  tracks_list: [],
};

const ADD_TO_TRACKS_LIST = 'ADD_TO_TRACKS_LIST';


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


export const addToTracksList = (name, path) => {
  return ({
    type: ADD_TO_TRACKS_LIST,
    name,
    path,
  });
};


export default reducer;
