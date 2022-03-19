import React from 'react';

class SearchBar extends React.PureComponent {
  handleSearch = (event) => {
    this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <input
        className="form-control form-search"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
