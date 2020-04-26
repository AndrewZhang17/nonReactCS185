import React, { Component } from 'react';

class ImageItem extends Component {

    render() {
        return (
            <div className={"img-item " + this.props.dim}>
                <img className="grid-img" src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}

export default ImageItem;