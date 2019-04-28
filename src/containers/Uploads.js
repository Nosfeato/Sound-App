import { connect } from 'react-redux';

import Uploads from 'src/components/App/Uploads';

import { addToTracksList } from 'src/store/reducer';


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  addToTracksList: (name, file) => {
    dispatch(addToTracksList(name, file));
  },
});


const UploadsProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uploads);


export default UploadsProvider;
