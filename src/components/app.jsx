import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {

  render() {
    const iconStyle = { position: 'absolute', top: '70px', left: '60px', fontWeight: '400', fontSize: '2.6em', opacity: '0.4' }
    return(
    <div>
      <div className='left-scene'>
        <FaSearch style={iconStyle} />
        <SearchBar />
        <div className='selected-gif'>
          <Gif />
        </div>
      </div>
      <div className='right-scene'>
      </div>
    </div>
    )
  }
}

export default App;
