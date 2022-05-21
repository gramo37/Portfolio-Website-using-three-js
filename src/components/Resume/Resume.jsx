import React from 'react';
import "./resume.css";
import pdf from './Prasanna_Gramopadhye_Resume.pdf'

const Resume = () => {

  return (
    <>
        <div className='resume-download'>
            <a href={pdf} target="_blank"><button className='resume-download-btn'>Download CV</button></a>
        </div>
    </>
  )
}

export default Resume