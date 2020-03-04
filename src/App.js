import React, { Component } from "react";
import Date from "./components/Date";
import FetchedPhoto from "./components/FetchedPhoto.js";

class App extends Component {
  state = {
    date: "",
    PhotoFromapi: ""
  };

  updateDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    this.setState({ date: dateFromInput });
    this.FetchPhotoFromApi(dateFromInput);
  };

  FetchPhotoFromApi = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=PYaXjEGiQ8hZinDbYCldOqD9NYmzfi8Vy26kOIwd`)
      .then(response => response.json())
      .then(photoData => this.setState({ photo: photoData }));
  };

  render() {
    return (
      <div>
        <h1>NASA's Picture of the Day</h1>
        <Date updateDate={this.updateDate} />
        <FetchedPhoto photo={this.state.photo} />
      </div>
    );
  }
}

export default App;