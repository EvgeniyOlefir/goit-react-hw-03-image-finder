import React, { Component } from 'react';
import Searchbar from './components/Searchbar';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
      </>
    );
  }
}
