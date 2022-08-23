import React from 'react';
import "./project.css";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ProjectItem from './ProjectItem';
const image1 = require("./Images/onlineExamPortal.png")
const image2 = require("./Images/todosList.png")
const image3 = require("./Images/fb.png")
const image4 = require("./Images/linkedIn.png")
const image5 = require("./Images/age.png")

const Project = () => {

    const data = [{
        alignment: "left",
        image: image1,
        title: "Online Exam Portal",
        desc: "An Online Examination Portal where in teachers can create and conduct Multiple Choice Questions (MCQ) exams for their students and also calculate their scores. After calculation, the scores are sent to students via mail and they can also check it on the website.",
        tech: "HTML, CSS, TailwindCSS, React, Mongo DB, Node, Express, AWS.",
        demo: "https://online-examination-portal.netlify.app"
    }, {
        alignment: "right",
        image: image2,
        title: "TodosList",
        desc: "A TODO's List with OTP sign-up functionality and Password Reset Functionality where anyone can store notes on cloud.",
        tech: "HTML, CSS, TailwindCSS, React, Mongo DB, Node, Express, Heroku and Netlify.",
        demo: "https://condescending-pasteur-f1af07.netlify.app"
    },
    {
        alignment: "left",
        image: image3,
        title: "Facebook Clone",
        desc: "A frontend looking exact like facebook with Login and Signin functionality.",
        tech: "HTML, CSS, TailwindCSS, React, Mongo DB, Node, Express, Heroku and Netlify.",
        demo: "https://comforting-dango-6a9291.netlify.app"
    },
    {
        alignment: "right",
        image: image5,
        title: "Age Calculator",
        desc: "An Age Calculator that calculates exact age in seconds!",
        tech: "HTML, CSS, JS and deployed on github",
        demo: "https://snazzy-smakager-4531e9.netlify.app"
    }
    ]

    return (
        <>
            <div className="top"></div>
            <div className="project-heading">
                <h2>Projects</h2>
                <AccountTreeIcon />
            </div>
            <div className="projects-section">
                {data.map((item, index) => {
                    return (<ProjectItem key={index} demo={item.demo} alignment={item.alignment} title={item.title} image={item.image} desc={item.desc} tech={item.tech} />)
                })}
            </div>
        </>
    )
}

export default Project