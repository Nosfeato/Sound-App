import { connect } from 'react-redux';

import Uploads from 'src/components/App/Uploads';

import { addToTracksList } from 'src/store/reducer';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addToTracksList: (name, path) => {
    dispatch(addToTracksList(name, path));
  },
});


const UploadsProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uploads);


export default UploadsProvider;
