import React from 'react';

class ImageCard extends React.Component {
  constructor() {
    super();

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // add event to get image height
    // just console.log doesn't return height
    // because img load does not complete yet
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
