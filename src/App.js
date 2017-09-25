import React, { Component } from 'react';
import { getAPIurl } from './utils';
import CardList from './components/CardList'

class App extends Component {
  state = {
    media:    'all',
    query:    '',
    entities: [],
    loading:  false,
    loaded:   false
  }

  render() {

    return (
      <div className="App" onSubmit={this.handleFormSubmit}>
        <form>
          <input type="text" onChange={this.handleInputChange}/>
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
        <CardList entities={this.state.entities}/>
      </div>
    );
  }

  handleMediaChange = (e) => {
    this.setState({media: e.target.value})
    this.loadCards()
  }

  handleFormSubmit = (e) => e.preventDefault();

  handleInputChange = (e) => {
    this.setState({query: e.target.value})
    this.loadCards()
  }

  loadCards = () => {
    if (this.state.query.length < 2) return;
    const url = getAPIurl(this.state.query, this.state.media);

    this.setState({
      loading: true,
      loaded:  false
    })

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          entities: res.results,
          loading:  false,
          loaded:   true
        })
      })
      .catch(e => {
        console.log(e)
        this.setState({
          loading: false
        })
      })
  }

}

export default App;