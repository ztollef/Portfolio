import React from 'react';
import './about.css';
import profile from "../../assets/profile-picture.jpg";

const About = () => {

    return(
        <div className="container-about">
            <h1>About Me</h1> 
                <div className="flex-about">  
                    <img src={profile} className="profile-pic" alt="Me" />
                    <div className="summary">
                        <p>Hello! My name is Zach Tollefson, and I'm a full-stack developer based in Madison, WI. I'm currently looking for a full time position. </p>
                        <p>I prefer to create simple and responsive sites that are easy to navigate over those that are overly complex, but still strive for a unique user experience with elegant design and engaging functionality. I mainly use the MERN stack for development, but am always open to learning new technologies if the problem calls for it. </p>
                    </div>
                </div>
                <div className="skill-areas">                            
                    <div className="skill-area">
                        <h4>Front-End</h4>
                        <ul className="skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>JavaScript</li> 
                            <li>TypeScript</li>           
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
                            <li>Jest</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default About;