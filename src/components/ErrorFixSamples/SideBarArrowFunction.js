import React from 'react';

class SideBar extends React.Component {
  state = { term: '' };
  // naming custom
  // on + element + action
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image Search Arrow Function</label>
            {/* this is controlled element */}
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* <input type='text' onChange={this.onInputChange}  /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SideBar;
