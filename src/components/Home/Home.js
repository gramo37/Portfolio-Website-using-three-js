import React, { useEffect, useState, useRef } from 'react'
import * as THREE from 'three';
import "./home.css";
import moonImage from "../../Images/moon.jpg"
import venusImage from "../../Images/venus.jpg"
import spaceImage from "../../Images/space.jpg"
import MyTimeline from '../Timeline/MyTimeline';
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom"
import html from "./Images/HTML.png"
import css from "./Images/CSS.png"
import react from "./Images/REACT.png"
import node from "./Images/node.png"
import mongo from "./Images/mongo.png"
import tailwind from "./Images/tailwind.png"
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from "react-redux"
import { sendEmail } from '../../redux/actions/mailAction';
import MyAlert from '../Alert/MyAlert';
import ButtonLoader from '../ButtonLoader/ButtonLoader';

const Home = () => {

  const form = useRef();

  const [load, setLoad] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("work")
  const dispatch = useDispatch()

  const mail = useSelector((state) => state.mail)

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    message: "",
    phone: ""
  })

  const contactFormChangeHandler = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  const contactFormSubmit = async (e) => {
    e.preventDefault()
    console.log(userDetails)
    if (userDetails.name === "" || userDetails.email === "" || userDetails.message === "") {
      // Error
      setErrorMessage("Please fill all mandatory details!")
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 2000)
    } else {
      await dispatch(sendEmail(form.current))
    }
  }

  useEffect(() => {
    console.log(mail)
    if (!mail.loading) {
      if (mail.error === "" && mail.message !== "") {
        // Success
        setErrorMessage("Mail Sent Successfully.")
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
        }, 2000)
      }
      else if (mail.error !== "" && mail.message === "") {
        // Error
        setErrorMessage("Sorry, Something went wrong!")
        setShowError(true)
        setTimeout(() => {
          setShowError(false)
        }, 2000)
      }
    }
    userDetails !== {
      name: "",
      email: "",
      message: ""
    } && setUserDetails({
      name: "",
      email: "",
      message: ""
    })
  }, [mail])

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoad(true)
    }
  }, [])

  useEffect(() => {
    return window.addEventListener("load", async (e) => {
      setLoad(true)
    })
  }, [])

  useEffect(() => {
    // Basic Variables
    const canvas = document.querySelector(".homeCanvas")
    const renderer = new THREE.WebGLRenderer({ canvas });
    const textureLoader = new THREE.TextureLoader();
    const scene = new THREE.Scene();

    // Camera Configuration
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(4, 4, 8);

    // const controls = new OrbitControls( camera, renderer.domElement );

    // Moon
    const moonTexture = textureLoader.load(moonImage)
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    // Venus
    const venusTexture = textureLoader.load(venusImage)
    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    venus.position.set(8, 5, 5);

    // Space
    const spaceTexture = textureLoader.load(spaceImage)

    // PointLights
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(8, 5, 5)

    const pointLight2 = new THREE.PointLight(0xffffff, 1);
    pointLight2.position.set(4, 4, 8)

    // Scenes
    scene.add(moon)
    scene.add(venus)
    scene.add(pointLight)
    scene.add(pointLight2)

    scene.background = spaceTexture

    // Rotate on mouse Movement
    const constSpeed = 0.01
    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientX >= window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }

      if (e.clientY >= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }

      if (e.clientY < window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    })

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    }

    animate();

    return window.addEventListener("scroll", () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;

      const skillsBox = document.getElementById("homeskillBox");
      const homeCubeSkills = document.getElementById("homeCubeSkills");
      const contactMeForm = document.getElementById("contact-me-form");
      console.log(window.scrollY, window.innerWidth, (window.scrollY / window.innerWidth))
      if (window.innerWidth > 1000) {
        if (window.scrollY > 1600 && window.scrollY < 3000) {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          skillsBox.style.right = "0px";
          homeCubeSkills.style.left = "0px"

        } else {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOff";
          skillsBox.style.right = "-300px";
          homeCubeSkills.style.left = "-1000px"
        }
        if (window.scrollY > 2600) {
          contactMeForm.style.top = "0px"
        } else {
          contactMeForm.style.top = "1000px"
        }
      } else if (window.innerWidth > 450) {
        if (window.scrollY > 1800 && window.scrollY < 3200) {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          skillsBox.style.right = "0px";
          homeCubeSkills.style.left = "0px"

        } else {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOff";
          skillsBox.style.right = "-300px";
          homeCubeSkills.style.left = "-1000px"
        }
        if (window.scrollY > 2600) {
          contactMeForm.style.top = "0px"
        } else {
          contactMeForm.style.top = "1000px"
        }
      } else {
        if (window.scrollY > 2400 && window.scrollY < 3400) {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          skillsBox.style.right = "0px";
          homeCubeSkills.style.left = "0px"

        } else {
          // skillsBox.style.animationName = "homeskillsBoxAnimationOff";
          skillsBox.style.right = "-300px";
          homeCubeSkills.style.left = "-1000px"
        }
        if (window.scrollY > 3200) {
          contactMeForm.style.top = "0px"
        } else {
          contactMeForm.style.top = "1000px"
        }
      }
    });

  }, [])

  return (
    <>

      {showSuccess && <MyAlert variant="success" message={errorMessage} />}
      {showError && <MyAlert variant="danger" message={errorMessage} />}
      <div style={load ? { display: "none" } : { display: "block" }} className="loader">
        <Loader />
      </div>
      <div style={load ? { display: "block" } : { display: "none" }} className="home">
        <canvas className='homeCanvas'>
        </canvas>

        <Link to="/projects"><button className='front-btn projects-btn'>VIEW WORK</button></Link>

        <div className='front-name'>
          <p>P</p>
          <p>R</p>
          <p>A</p>
          <p>S</p>
          <p>A</p>
          <p>N</p>
          <p>N</p>
          <p>A</p>
        </div>

        <div className="front-info">
          <p>DEVELOPER</p>
          <p>PROBLEM SOLVER</p>
          <p>ASSISTANT SYSTEM ENGINEER</p>
        </div>

        <div className="homeContainer">
          <h3>TIMELINE</h3>
          <MyTimeline timelines={
            [
              {
                date: "Apr 2022",
                title: "Building a real world project in collaboration with a linkedIn friend",
                description: "Working on a Resume Builder for freshers as well as experienced professionals, were in after filling up some basic details and selecting a resume template, a scannable resume pdf will be generated on a click!"
              },
              {
                date: "Apr 2022",
                title: "Upskilling Further",
                description: "Started working on Data Structures and algorithms, high level design and low level design skills."
              },
              {
                date: "Mar 2022",
                title: "Created Backend Projects",
                description: "Built an Online Examination Portal where in teachers can create and conduct Multiple Choice Questions (MCQ) exams for their students and also calculate their scores. After calculation, the scores are sent to students via mail and they can also check it on the website."
              },
              {
                date: "Feb 2022",
                title: "Exploring Backend",
                description: "Started to learn about Backend. Started to learn NodeJs, ExpressJs and MongoDB. Created an Ecommerce website using the MERN stack (MongoDB, Express, React and Node)."
              },
              {
                date: "Dec 2021",
                title: "Creating projects",
                description: "Created 2 projects facebook clone and LinkedIn clone, using the knowledge learned in past 2-3 months."
              },
              {
                date: "Oct 2021",
                title: "Deep dive into Web Development.",
                description: "The training at TCS made me more interested into Web development and I started learning about Tailwind CSS (a CSS framework), bootstrap and React (a frontend framework for single page applications)"
              },
              {
                date: "Aug 2021",
                title: "Training period at TCS.",
                description: "Started Learning about Web Development as a part of training at TCS, built several websites as a part of training using HTML, CSS and Javascript."
              },
              {
                date: "July 2021",
                title: "Joined Tata Consultancy Services Ltd",
                description: "Started Working as Assistant System Engineer at TCS a global leader in IT services, consulting & business solutions."
              },
              {
                date: "May 2021",
                title: "Completed Graduation",
                description: "Completed My Graduation From Pune Vidyaarthi griha's college of engineering with 8.84 CGPA."
              }
            ]
          } />
          <Link to="/projects"><button className='projects-btn2'>VIEW PROJECTS</button></Link>
        </div>
        <div className="homeSkills">
          <h3>
            SKILLS
          </h3>
          <div className="homeCubeSkills" id="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img src={html} alt="html" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img src={css} alt="css" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img src={react} alt="html" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img src={tailwind} alt="html" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img src={node} alt="html" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img src={mongo} alt="html" />
            </div>
          </div>
          <div className="cubeShadow"></div>
          <div className="homeSkillsBox" id="homeskillBox">
            <SiCplusplus />
            <SiReact />
            <SiJavascript />
            <SiMongodb />
            <SiNodedotjs />
            <SiExpress />
            <SiCss3 />
            <SiHtml5 />
            <SiThreedotjs />
          </div>
        </div>

        <div className='contact-me-section'>
          {/* {showSuccess && <MyAlert variant="success"/>} */}
          <h2>Contact Me</h2>
          <form ref={form} className="contact-me-form" id="contact-me-form" onSubmit={contactFormSubmit} onChange={contactFormChangeHandler}>
            <div><input type="text" placeholder='Enter Your Name' name="name" value={userDetails.name} required /></div>
            <div><input type="email" placeholder='Email Address' name="email" value={userDetails.email} required /></div>
            <div><input type="tel" placeholder='Phone Number' name="phone" value={userDetails.phone} /></div>
            <div><textarea placeholder='Enter Message' name="message" required>{userDetails.message}</textarea></div>
            {mail.loading ? <ButtonLoader /> : <div><button type='submit'>Submit</button></div>}
          </form>
        </div>


      </div>
    </>
  )
}

export default Home