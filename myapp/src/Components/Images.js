import React, { Component } from 'react';
import Grid from './Grid';
import ImageItem from './ImageItem';

class Images extends Component {    

    importImages = (r) => {
        return r.keys().map(key => 
            <ImageItem src={r(key)}/>
        );
    }

    render() {
        const images = this.importImages(require.context('../assets/images/', false, /\.(png|jpe?g)$/));
        
        return (
            <div>
                <h1>
                    Images
                </h1>
                <Grid items={images}/>                
            </div>
        );
    }
}

export default Images;