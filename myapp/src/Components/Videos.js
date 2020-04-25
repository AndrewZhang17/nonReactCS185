import React, { Component } from 'react';
import VideoItem from './VideoItem';
import Grid from './Grid';

class Videos extends Component {
    importVideos = (r) => {
        return r.keys().map(key => 
            <VideoItem src={r(key)} type="video"/>
        );
    }

    render() {
        const videos = this.importVideos(require.context('../assets/videos/', false, /\.(mov|mp4)$/));
        const youtubes = [
            "https://www.youtube.com/embed/wAb3NFcyMCQ",
            "https://www.youtube.com/embed/tk_ZlWJ3qJI",
            "https://www.youtube.com/embed/NGbFtTYQpus",
            "https://www.youtube.com/embed/PjiF8XmVDso",
            "https://www.youtube.com/embed/t81529ANEhI",
            "https://www.youtube.com/embed/aYnyMPc3LQ4"
        ].map(link => 
            <VideoItem src={link} type="iframe"/>
        );

        return (
            <div>
                <h1>
                    Videos
                </h1>
                <Grid items={videos.concat(youtubes)}/>                 
            </div>
        );
    }
}

export default Videos;