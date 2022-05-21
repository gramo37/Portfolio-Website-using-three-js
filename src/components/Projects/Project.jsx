import React from 'react';
import "./project.css";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ProjectItem from './ProjectItem';
const image1 = require("./Images/onlineExamPortal.png")
const image2 = require("./Images/todosList.png")

const Project = () => {

    const data = [{
        alignment:"left",
        image: image1, 
        title:"Online Exam Portal",
        desc: "A Online examination portal where teachers can conduct MCQ exams for students. Made using the MERN (Mongo, Express, React, Node) Stack and Tailwind CSS and hosted on AWS", 
        tech: "HTML, CSS, TailwindCSS, React, Mongo DB, Node, Express, AWS.",
        demo: "http://54.147.132.26/"
    },{
        alignment:"right",
        image: image2, 
        title:"TodosList",
        desc: "A TODO's List with OTP sign-up functionality and Password Reset Functionality where anyone can store notes on cloud.", 
        tech: "HTML, CSS, TailwindCSS, React, Mongo DB, Node, Express, Heroku and Netlify.",
        demo: "https://condescending-pasteur-f1af07.netlify.app"
    }]

  return (
    <>
        <div className="top"></div>
        <div className="project-heading">
            <h2>Projects</h2>
            <AccountTreeIcon />
        </div>
        <div className="projects-section">
            {data.map((item, index) => {
                return (<ProjectItem key={index} demo={item.demo} alignment={item.alignment} title={item.title} image={item.image} desc={item.desc} tech={item.tech}/>)
            })}
        </div>
    </>
  )
}

export default Project