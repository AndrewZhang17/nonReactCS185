import React, { Component } from 'react';
import Grid from './Grid';
import ImageItem from './ImageItem';
import { SRLWrapper } from 'simple-react-lightbox';

class Images extends Component {    

    importImages = (r) => {
        return r.keys().map(key => 
            <ImageItem src={r(key)} key={key}/>
        );
    }

    render() {
        const images = [
            {
                src: require('../assets/images/Perry.png'),
                alt: "A Perry the Platypus I drew",
                dim: ""
            },            
            {
                src: require('../assets/images/hiking.jpg'),
                alt: "Hiking in Washington was fun",
                dim: ""
            }, 
            {
                src: require('../assets/images/europa.jpeg'),
                alt: "I worked on an AR app for the upcoming Europa mission",
                dim: ""
            },           
            {
                src: require('../assets/images/msft.jpg'),
                alt: "I was a summer intern at Microsoft",
                dim: "wide"
            },
            {
                src: require('../assets/images/dessert.jpg'),
                alt: "Fancy dessert I ate in the Bay Area",
                dim: "tall"
            },
            {
                src: require('../assets/images/sbhacks.jpg'),
                alt: "I help organize SB Hacks",
                dim: ""
            },
            {
                src: require('../assets/images/caterpillar.jpg'),
                alt: "I rode a caterpillar",
                dim: ""
            },
            {
                src: require('../assets/images/matcha.jpg'),
                alt: "I like matcha",
                dim: ""
            },
            {
                src: require('../assets/images/potatochip.jpg'),
                alt: "My parents on Potato Chip Rock",
                dim: "wide"
            },
            {
                src: require('../assets/images/sbhackswkshop.jpg'),
                alt: "I sat in on the Firebase workshop at SB Hacks",
                dim: "wide"
            }
        ].map(img =>
            <ImageItem src={img.src} alt={img.alt} dim={img.dim} key={img.src}/>    
        )
        this.importImages(require.context('../assets/images/', false, /\.(png|jpe?g)$/));
        
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