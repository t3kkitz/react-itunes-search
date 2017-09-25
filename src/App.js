import React, { Component } from 'react';

class App extends Component {
  state = {
    media: 'all',
    query: ''
  }

  render() {

    return (
      <div className="App">
        <form>
          <input type="text"/>
          <select value={this.state.media} onChange={this.handleMediaChange}>
            <option value="movie">Movie</option>
            <option value="podcast">Podcast</option>
            <option value="music">Music</option>
            <option value="musicVideo">MusicVideo</option>
            <option value="audiobook">Audiobook</option>
            <option value="shortFilm">ShortFilm</option>
            <option value="tvShow">TV Show</option>
            <option value="software">Software</option>
            <option value="ebook">E-book</option>
            <option value="all">All</option>
          </select>
        </form>
      </div>
    );
  }

  handleMediaChange = (e) => {
    this.setState({media: e.target.value})
  }

}

export default App;

//https://itunes.apple.com/search?media=all&term=maroon+5