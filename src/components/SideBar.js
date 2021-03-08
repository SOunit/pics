import React from 'react';

class SideBar extends React.Component {
  // naming custom
  // on + element + action
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={this.onInputChange} />
            {/* <input type='text' onChange={(e) => console.log(e.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SideBar;
