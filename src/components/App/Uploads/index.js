import React from 'react';


class Uploads extends React.Component {


  addTrack = (event) => {
    const { addToTracksList } = this.props;
    const file = event.target.files[0];
    const filePath = window.URL.createObjectURL(file);
    const { name } = file;
    addToTracksList(name, filePath);
    event.target.value = null;
  }


  render() {
    return (
      <>
        <input type="file" onChange={this.addTrack} />
      </>
    );
  }
}

export default Uploads;
