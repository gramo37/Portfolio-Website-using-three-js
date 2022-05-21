import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
        <div className="footer">
          <div className="about-me-section">
            <div className='about-me-heading'>
              About Me
            </div>
            <div className="about-me">
              Hey, I am Prasanna Gramopadhye. Currently, working as an Assistant System Engineer at Tata Consultancy Services Ltd, and Web development is something that has fascinated me and in near future would love to work on Web projects.
            </div>
            <div>
              <Link to="/about"><button className='contact-me-btn'>More About Me</button></Link>
            </div>
          </div>
          <div className='social-media'>
            <h2>Social Media</h2>
            <div>
              <div className='social-media-inner-box'>
                <a href="https://twitter.com/gramopadhye37" target="_blank">
                  <TwitterIcon color="primary" />
                </a>
              </div>
              <div className='social-media-inner-box'>
                <a href="https://github.com/gramo37" target="_blank">
                  <GitHubIcon />
                </a>
              </div>
              <div className='social-media-inner-box'>
                <a href="https://www.linkedin.com/in/prasanna-gramopadhye-1791701b9/" target="_blank">
                  <LinkedInIcon color="primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer