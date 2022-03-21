import React from 'react';
import Gif from './gif';

class GifList extends React.PureComponent {
  renderList = () => {
    return this.props.gifs.map((gif) => {
      return (
        <Gif
          id={gif.id}
          key={gif.id}
          title={gif.title}
          selectGifFunction={this.props.selectGifFunction}
        />
      );
    });
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}

export default GifList;
