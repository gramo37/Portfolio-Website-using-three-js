import React from 'react';
import "./project.css";

const ProjectItem = (props) => {
    const {alignment, image, desc, tech, title, demo} = props
    return (
        <>
            <div className = {`${alignment === "right" ? "project-row-reverse" : "project-row-standard"} project-item-section `}>
                <div className='project-desc'>
                    <h2>About Project</h2>
                    <p>{desc}</p>
                    <p><span style={{fontFamily: "'Roboto', sans-serif;", fontWeight: "600"}}>Tech Stack:</span> {tech}</p>
                </div>
                <div className='project-demo'>
                    <div><img src={image} alt="" /></div>
                    <p>{title}</p>
                    <div><a href={demo} target="_blank"><button>VIEW DEMO</button></a></div>
                </div>
            </div>
        </>
    )
}

export default ProjectItem