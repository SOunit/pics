import React from 'react';

class ImageCard extends React.Component {
  constructor() {
    super();

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // add event to get image height
    // just console.log doesn't return height
    // because img load does not complete yet
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
