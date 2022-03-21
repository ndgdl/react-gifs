import React from 'react';

class SearchBar extends React.PureComponent {
  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        defaultValue="hello there"
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
