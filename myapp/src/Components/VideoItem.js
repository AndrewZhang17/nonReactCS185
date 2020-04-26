import React, { Component } from 'react';

class VideoItem extends Component {
    createItem = () => {
        if(this.props.type === "video") {
            return <video className="grid-vid" src={this.props.src} controls></video>
        }
        else if(this.props.type === "iframe") {
            return <iframe src={this.props.src} title={this.props.src} allowFullScreen></iframe>
        }
    }

    render() {
        return (
            <div className="vid-item">
                {this.createItem()}
            </div>
        );
    }
}

export default VideoItem;