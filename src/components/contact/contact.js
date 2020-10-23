import React from 'react';
import './contact.css';
import github from "../../assets/GitHub-Mark-64px.png"
import linkedin from "../../assets/LI-In-Bug.png";
import email from "../../assets/icons8-new-post-96.png";

const Contact = () => {
    return(
        <section className="container-contact">
            <h1>Contact</h1>
            <h4>I am always open to collaboration. Feel free to reach out:</h4>
            <ul className="contact-methods">  
                <li>
                    <a href="mailto:za.tollefson@gmail.com"><img src={email} width="30px" />za.tollefson@gmail.com</a>
                </li>
                <li>
                    <a href="https://github.com/ztollef" target="_blank"> <img src={github} width="30px" />ztollef</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/zach-tollefson" target="_blank"><img src={linkedin} width="30px" />ztollef</a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;