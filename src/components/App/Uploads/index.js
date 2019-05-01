import React from 'react';


class Uploads extends React.Component {


  addTrack = (event) => {
    const { addToTracksList } = this.props;
    const file = event.target.files[0];
    const filePath = window.URL.createObjectURL(file);
    const { name } = file;
    addToTracksList(name, filePath);
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
