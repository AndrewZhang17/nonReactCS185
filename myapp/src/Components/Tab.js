import React, { Component } from 'react';

class Tab extends Component {
    addStyling = () => {
        if(this.props.tab.id === this.props.activeTab) {
            return {backgroundColor: "#42BFDD"};
        }
        else {
            return {backgroundColor: "#393E41"};
        }
    }
    render() {
        return (
            <li className="tab" style={this.addStyling()} onClick={this.props.changeTab.bind(this, this.props.tab.id)}>
                    <p>
                        {this.props.tab.title}
                    </p>
            </li>
        );
    }
}

export default Tab;