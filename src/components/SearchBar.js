import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  handleSubmit() {
    this.props.onSearchTermChange(this.state.term)
  }

  render() {
    return  (
      <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value) }/>

          <button
            className='button'
            onClick={event => this.handleSubmit(event)}>
              Search
          </button>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
  }
}

export default SearchBar;
