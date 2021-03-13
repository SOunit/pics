import React from 'react';
import SideBar from './SideBar';
import SideBarError from './ErrorFixSamples/SideBarError';
import SideBarAddConstructor from './ErrorFixSamples/SideBarAddConstructor';
import SideBarArrowFunction from './ErrorFixSamples/SideBarArrowFunction';
import SideBarArrowFunctionCall from './ErrorFixSamples/SideBarArrowFunctionCall';
import ThisRefError from './ErrorFixSamples/ThisRefError';

import axios from 'axios';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID bZZrw4DGzgGbw02TuaFxikFagSlUAJoHlpn1-ai2vwo',
      },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SideBar onSubmit={this.onSearchSubmit} />
        <p>{this.state.images.length} images found.</p>
        <hr />
        <h2>This Is Samples</h2>
        <SideBarError />
        <ThisRefError />
        <SideBarAddConstructor />
        <SideBarArrowFunction />
        <SideBarArrowFunctionCall />
      </div>
    );
  }
}

export default App;
