import React from 'react';
import giphy from 'giphy-api';

class Gif extends React.PureComponent {
  handleClick = (event) => {
    if (this.props.select) {
      return this.props.select(event.currentTarget.dataset);
    }
  }

  render() {
    return (
      <img
        src={`https://media2.giphy.com/media/${this.props.id}/200.gif`}
        alt={this.props.title}
        className="gif"
        data-id={this.props.id}
        data-title={this.props.title}
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
