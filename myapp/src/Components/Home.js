import React, { Component } from 'react';
import introImage from '../assets/images/caterpillar.jpg'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    Andrew Zhang
                </h1>
                <div className="intro">
                    <div>
                        <img id="introImage" src={introImage} alt="Me riding a caterpillar"/>
                    </div>
                    <div>
                            <p>
                                Hi! I am Andrew, and I am a student in CMPSC 185. I am currently at home taking classes virtually and working on various homework assignments. I hope to go outside at some point during each day in order to stay sane and healthy. 
                                <br/>This is a portfolio with images of what I've done and what I like, videos I find interesting, and projects I have either worked on or think are cool!
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;