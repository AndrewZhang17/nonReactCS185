import React, { Component } from 'react';
import Grid from './Grid';
import ImageItem from './ImageItem';
import { SRLWrapper } from 'simple-react-lightbox';

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
                <SRLWrapper>
                    <Grid items={images}/>                 
                </SRLWrapper>
            </div>
        );
    }
}

export default Images;