import React from 'react';
import './about.css'
import profile from "../../assets/profile-picture.jpg"

const About = () => {

    return(
        <div className="container-about">
            <h1>About Me</h1> 
            <div className="profile">
                <img src={profile} className="profile-pic" alt="Me" />
                <div className="summary">
                    <h4>Are you hirable?</h4>
                    <p>Yes, I am looking for a full-time developer opportunity. </p>
                    <h4>What is my approach to web development?</h4>
                    <p>I prefer to create simple and responsive sites that are easy to navigate over those that are overly complex. However, I still strive for a unique user experience with elegant design and engaging functionality. I mainly use the MERN stack to create stuff, but am open to learning new technologies if the problem calls for it. </p>
                    <h4>Why am I drawn to this field?</h4>
                    <p> I enjoy the creativity that comes from problem-solving and implementing a design. I enjoy creating practical solutions to problems and sharing them with my friends!</p>
                    <h4>How did I get to this point in my career?</h4>
                    <p> While I've written code since I was in high school, I began my career as a chemical engineer. In my first role, I worked on a team of software engineers to develop process design software for the oil and gas industry. Enamoured with the software development process, I started to study web development in my free time with online courses and transitioned to the technology industry.</p>
                </div>
            </div>        
            <div className="skill-areas">                            
                <div className="skill-area">
                    <h4>Front-End</h4>
                    <ul className="skills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>Javascript</li> 
                        <li>Typescript</li>           
                        <li>React (with Hooks)</li>
                    </ul>
                </div>
                <div className="skill-area">
                    <h4>Back-End</h4>
                    <ul className="skills">
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>                       
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skill-area">
                    <h4>Other</h4>
                    <ul className="skills">
                        <li>Git</li>
                        <li>Jest (testing framework)</li>
                    </ul>
            </div>
            </div>
        </div>
    )
}

export default About;