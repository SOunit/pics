import React from 'react';
import SideBar from './SideBar';

import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SideBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.images.length} images found.</p>
      </div>
    );
  }
}

export default App;
