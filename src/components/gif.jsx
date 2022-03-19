import React from 'react';

class Gif extends React.PureComponent {
  render() {
    return (
      <img
        src={`https://media2.giphy.com/media/${this.props.id}/200.gif`}
        alt={this.props.title}
        className="gif"
      />
    );
  }
}

export default Gif;
