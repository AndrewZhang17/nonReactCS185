import React, { Component } from 'react';
import './App.css'
import TabList from './Components/TabList';
import Body from './Components/Body';
import SimpleReactLightbox from 'simple-react-lightbox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 1
        }
        this.changeTab = (id) => {
            this.setState({
                activeTab: id
            })
        }
    }

    render() {
        const tabs = [
            {
                id: 1,
                title: "Home"
            },
            {
                id: 2,
                title: "Images"
            },
            {
                id: 3,
                title: "Videos"
            }
        ];
        return (
            <SimpleReactLightbox>
                <div className="body">
                    <div className="nav-bar">
                        <TabList tabs={tabs} activeTab={this.state.activeTab} changeTab={this.changeTab}/>
                    </div>
                    <div className="content">
                        <Body activeTab={this.state.activeTab}/>
                    </div>
                </div>                
            </SimpleReactLightbox>
        );
    }
}

export default App;