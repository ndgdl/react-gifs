import React from 'react';
import giphy from 'giphy-api';

class Gif extends React.PureComponent {
  handleClick = () => {
    if (this.props.selectGifFunction) {
      return this.props.selectGifFunction(this.props);
    }
  }

  render() {
    return (
      <img
        src={`https://media2.giphy.com/media/${this.props.id}/200.gif`}
        alt={this.props.title}
        className="gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
