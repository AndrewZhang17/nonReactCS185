import React, { Component } from 'react';
import Tab from './Tab';

class TabList extends Component {
    render() {
        return (
            <ul className="tab-list">
                {this.props.tabs.map((tab) => (
                    <Tab tab={tab} activeTab={this.props.activeTab} changeTab={this.props.changeTab} key={tab.id}/>
                ))}
            </ul>            
        )
    }
}

export default TabList;