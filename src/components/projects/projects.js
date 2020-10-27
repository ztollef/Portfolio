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
                    skills="React, Bootstrap, Node.js, SQL"
                    githublink="www.github.com/ztollef/kanban-board"
                    livesite="www.zachtollefson.com"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="COVID-19 Tracker"  
                    description="Uses data from Johns Hopkins to visualize COVID-19 cases across the world."
                    skills="Typescript, SASS"
                    githublink="www.github.com/ztollef/covid-tracker"
                    livesite="www.zachtollefson.com"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="Fido Fetch API"  
                    description="An open source RESTful API where users can pull information about different dog breeds, including temperament, life expectancy, and weight."
                    skills="REST API, Node.js, Express, MySQL"
                    />
                </div>
                <div className="project">
                    <Project className="project"
                    title="Vintage Videogame E-Commerce"  
                    description="Mock e-commerce site for finding and purchasing vintage videogames. Complete with a front-end, back-end, and connection to database. Features include authentication, connection to Paypal API, security."
                    skills="React, Redux, Node.js, Express, JWT Authentication, Single Page Application, MySQL" />
                </div>
                <div className="project">
                    <Project className="project"
                    title="Portfolio Site"  
                    description="My personal portfolio site. You're on it now!"
                    skills="React, Typescript, SASS"
                    githublink="www.github.com/ztollef/covid-tracker"
                    livesite="www.zachtollefson.com"
                     />
                </div>
            </div>
            
    </section>
    )}

export default Projects;