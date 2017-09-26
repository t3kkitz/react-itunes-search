import React, { Component } from 'react';
import {
  getAPIurl,
  debounce
} from './utils';
import CardList from './components/CardList'

class App extends Component {
  constructor() {
    super()
    this.loadCards = debounce(this.loadCards, 500);
  }

  state = {
    media: 'all',
    query: '',
    entities: [],
    loading: false,
    loaded: false
  }

  render() {
    return (
      <div className="App" onSubmit={this.handleFormSubmit}>
        <form>
          <input type="text" onChange={this.handleInputChange} autoFocus/>
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.media !== this.state.media
      || (prevState.query !== this.state.query && this.state.query.length > 3)) this.loadCards();

    if (prevState.query !== this.state.query && !this.state.query.length) this.clearForm();
  }

  handleMediaChange = (e) => this.setState({media: e.target.value})

  handleFormSubmit = (e) => e.preventDefault();

  handleInputChange = (e) => this.setState({query: e.target.value})

  loadCards() {
    const {query, media} = this.state;
    const url            = getAPIurl(query, media);

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
        this.setState({loading: false})
      })
  }

  clearForm() {
    this.setState({
      entities: [],
      loading:  false,
      loaded:   false
    })
  }

}

export default App;