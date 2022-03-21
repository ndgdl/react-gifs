import React, { Component } from 'react';
import giphy from 'giphy-api';

import { FaSearch } from 'react-icons/fa';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: '3se2U9ZAJr7DW',
      selectedGifTitle: 'let the fun begins',
      gifs: []
    };
  }

  search = (query) => {
    giphy('UAbyzWuuB14EZD64Zr3IAGzoTdYBhUzg').search({
      q: query,
      rating: 'g',
      limit: 10
    })
      .then(res => this.setState({ gifs: res.data }));
  }

  selectGif = (gif) => {
    this.setState({
      selectedGifId: gif.id,
      selectedGifTitle: gif.title
    });
  }

  render() {
    const iconStyle = {
      position: 'absolute', top: '70px', left: '60px', fontWeight: '400', fontSize: '2.6em', opacity: '0.4'
    };

    return (
      <div>
        <div className="left-scene">
          <FaSearch style={iconStyle} />
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} title={this.state.selectedGifTitle} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
