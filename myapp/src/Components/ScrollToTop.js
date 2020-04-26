import React, { Component } from 'react';

class ScrollToTop extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        var btn = this;
        document.addEventListener("scroll", function(e) {
            btn.toggle();
        });
    }

    toggle() {
        if (window.pageYOffset > window.document.body.offsetHeight/5) {
            this.setState({visible: true});
        } else {
            this.setState({visible: false});          
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        if(this.state.visible) {
            return (
                <button className="scroll-btn" onClick={this.scrollToTop}>Back to Top</button>
            );
        }
        else {
            return false;
        }
    }
}

export default ScrollToTop;