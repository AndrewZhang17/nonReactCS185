import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <div className="project-item">
                <a className="project-link" href={this.props.src}>
                    <img className="grid-project" src={this.props.img} alt="Not loaded"/>
                    <p>{this.props.title}</p>
                </a>
            </div>
        );
    }
}

export default ProjectItem;