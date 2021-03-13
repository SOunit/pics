import React from 'react';
import SideBar from './SideBar';
import SideBarError from './ErrorFixSamples/SideBarError';
import SideBarAddConstructor from './ErrorFixSamples/SideBarAddConstructor';
import SideBarArrowFunction from './ErrorFixSamples/SideBarArrowFunction';
import SideBarArrowFunctionCall from './ErrorFixSamples/SideBarArrowFunctionCall';
import ThisRefError from './ErrorFixSamples/ThisRefError';

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SideBar onSubmit={this.onSearchSubmit} />
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
