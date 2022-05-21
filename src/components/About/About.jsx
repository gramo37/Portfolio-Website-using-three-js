import React, {useEffect} from 'react';
import image from "../logo/logo.jpeg";
import "./about.css"

const About = () => {

    useEffect(() => {
    //   return window.addEventListener("load", (event) => {
        const aboutMeSection2 = document.getElementById("about-me-section2")
        aboutMeSection2.style.top = "50%"
        aboutMeSection2.style.left = "50%"
        aboutMeSection2.style.transform = "translate(-50%, -50%)"
    //   });
    }, [])
    

    return (
        <>
            <div className="about-me-container2">
                <div className="about-me-section2" id='about-me-section2'>
                    <div className="my-image">
                        <div><img src={image} alt="" /></div>
                    </div>
                    <div className="about-me">
                        <h2>About Me</h2>
                        <h3>Full Stack Developer</h3>
                        <p>
                            Currently, I am working as an Assistant System Engineer at Tata Consultancy Services Ltd, and have a keen interest in the field of web development and Blockchain development. MERN stack development is something that has fascinated me and in near future would love to work on MERN projects.
                        </p>
                        <p>
                            When I am not glued to the computer screen I like to spend time with my family, go for a walk with my father and practice chess.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About