import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { input } = this.state;
    onSubmit(input);
  };

  render() {
    const { input } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleOnChange}
            value={input}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            // autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
