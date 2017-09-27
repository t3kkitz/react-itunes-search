import React, { Component } from 'react';
import {
  getAPIurl,
  debounce
} from './utils';
import CardList from './components/CardList';
import Message from './components/Message';
import styled from 'styled-components';

const Header = styled.header`
  background:#212121;
  padding:  8px;
  display: flex;
  justify-content: center;
  form {
  margin: 8px;
  width: 100%;
  max-width: 960px;
  display: flex;
  background:#FFFFFF;
  height:  40px;
  }
  input{
  flex: 1 0 auto;
  height:  100%;
  outline: none;
  padding:  0 8px;
  border: none;
  font-size:  20px;
  font-weight: bold;
  } 
  select{
  height: 100%;
  }
`;

class App extends Component {
  constructor() {
    super()
    this.loadCards = debounce(this.loadCards, 500);
  }

  state = {
    media:    'all',
    query:    '',
    entities: [],
    status:   'start'
  }

  render() {
    const {status, entities, query, media} = this.state;
    return (
      <div className="App" onSubmit={this.handleFormSubmit}>
        <Header>
          <form>
            <input type="text"
                   onChange={this.handleInputChange}
                   placeholder="iTunes search"
                   value={query}
                   autoFocus/>
            <select value={media} onChange={this.handleMediaChange}>
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
        </Header>

        {status === 'loaded'
          ? <CardList entities={entities}/>
          : <Message status={status}/>}

      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.media !== this.state.media
      || (prevState.query !== this.state.query)) this.loadCards();
  }

  handleMediaChange = (e) => this.setState({media: e.target.value})

  handleFormSubmit = (e) => e.preventDefault();

  handleInputChange = (e) => this.setState({query: e.target.value})

  loadCards() {
    const {query, media} = this.state;
    const url            = getAPIurl(query, media);

    this.setState({
      status: 'loading'
    })

    fetch(url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          entities: res.results,
          status:   !!res.results.length
                      ? 'loaded'
                      : 'noContent'
        })

      })
      .catch(e => {
        console.log(e)
        this.setState({
          loading: false,
          status:  'error'
        })
      })
  }
}

export default App;