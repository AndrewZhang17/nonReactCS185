import React, { Component } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

class ImageItem extends Component {
    render() {
        return (
            <div className="img-item">
                <SRLWrapper>
                    <img className="grid-img" src={this.props.src}/>
                </SRLWrapper>
            </div>
        );
    }
}

export default ImageItem;