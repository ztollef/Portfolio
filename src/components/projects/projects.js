import React from 'react';
import './projects.css';
import Project from "../project/project.js";

const Projects = () => {

    return (
    <section className="container-projects">
         <h1>Selected Projects</h1> 
            <div className="flex-projects">
                <div className="project">
                    <Project  
                    title="Kanban Board"  
                    description="An agile project management tool for tracking bugs, enhancements, and other tasks in a project pipeline."
                    githublink="https://github.com/ztollef/kanban-board"
                    livesite="https://zachtollefson.com/kanban-board"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="COVID-19 Tracker"  
                    description="Uses data from Johns Hopkins to visualize COVID-19 cases across the world."
                    githublink="https://github.com/ztollef/covid-tracker"
                    livesite="https://zachtollefson.com/covid-tracker"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="Face Recognition App"  
                    description="An application that demonstrates how far facial recognition technology has come. Input a URL to an image of a face and the app will draw a box around the face."
                    githublink="https://github.com/ztollef/face-recognition"
                    livesite="https://zachtollefson.com/face-recognition"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="Portfolio Site"  
                    description="My personal portfolio site. You're on it now!"
                    githublink="https://github.com/ztollef/ztollef.github.io"
                    livesite="https://zachtollefson.com/"
                     />
                </div>
            </div>
            
    </section>
    )}

export default Projects;