import React, { Component } from 'react';
import icon from '../assets/icon.png'
import ProjectItem from './ProjectItem';
import Grid from './Grid';

class Projects extends Component {
    render() {
        const projects = [
            {
                title: "SB Hacks",
                src: "https://sbhacks.com",
                img: "https://www.sbhacks.com/webAssets/Asset%2022.svg"
            },
            {
                title: "OnSight",
                src: "https://opslab.jpl.nasa.gov",
                img: "https://opslab.jpl.nasa.gov/assets/mars20150121-16.jpg"
            },
            {
                title: "My Website",
                src: "https://github.com/AndrewZhang17/CS185",
                img: icon
            },
            {
                title: "Jeffrey's Photography",
                src: "http://www.columbia.edu/~jh3904/index.html",
                img: "http://www.columbia.edu/~jh3904/imgs/landingPhoto2.jpg"
            },
            {
                title: "Esther's Website",
                src: "http://eliu.tech",
                img: "https://static.wixstatic.com/media/129dbc_9cfbe66c53c24f289d8fc446e2c7e540~mv2.jpg/v1/fill/w_810,h_608,al_c,q_90,usm_0.66_1.00_0.01/129dbc_9cfbe66c53c24f289d8fc446e2c7e540~mv2.webp"
            }
        ].map(p => 
            <ProjectItem title={p.title} src={p.src} img={p.img} key={p.src}/>    
        );

        return (
            <div>
                <h1>
                    Projects
                </h1>
                <Grid items={projects}/>                 
            </div>
        );
    }
}

export default Projects;