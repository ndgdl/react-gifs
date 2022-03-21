import React from 'react';

class SearchBar extends React.PureComponent {
  handleChange = (event) => {
    this.props.searchFunction(event.currentTarget.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
