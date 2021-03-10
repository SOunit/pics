import React from 'react';
import SideBar from './SideBar';
import SideBarError from './ErrorFixSamples/SideBarError';
import SideBarAddConstructor from './ErrorFixSamples/SideBarAddConstructor';
import SideBarArrowFunction from './ErrorFixSamples/SideBarArrowFunction';
import SideBarArrowFunctionCall from './ErrorFixSamples/SideBarArrowFunctionCall';
import ThisRefError from './ErrorFixSamples/ThisRefError';

const App = () => {
  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SideBar />
      <hr />
      <SideBarError />
      <ThisRefError />
      <SideBarAddConstructor />
      <SideBarArrowFunction />
      <SideBarArrowFunctionCall />
    </div>
  );
};

export default App;
