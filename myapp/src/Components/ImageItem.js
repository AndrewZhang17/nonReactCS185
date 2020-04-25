import React, { Component } from 'react';

class ImageItem extends Component {

    render() {
        return (
            <div className="img-item">
                <img className="grid-img" src={this.props.src}/>
            </div>
        );
    }
}

export default ImageItem;