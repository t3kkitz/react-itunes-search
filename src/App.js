import React, { Component } from 'react';
import styled from 'styled-components';
import {
  getAPIurl,
  debounce
} from './utils';
import CardList from './components/CardList';
import Message from './components/Message';
import Header from './components/Header'

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

        <Header query={query}
                media={media}
                handleMediaChange={this.handleMediaChange}
                handleInputChange={this.handleInputChange}/>

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