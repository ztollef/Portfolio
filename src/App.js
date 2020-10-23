import React, {useRef, useEffect, useState} from 'react';
import './App.css';
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact"

import github from "./assets/GitHub-Mark-64px.png"
import linkedin from "./assets/LI-In-Bug.png";
import email from "./assets/icons8-new-post-96.png";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
      height,
      offsetTop,
      offsetBottom
  }
};

const scrollTo = ele => {
  ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}

const App = () => {
 
  const [visibleSection, setVisibleSection] = useState();

  const navbarRef = useRef(null);
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [showNav, setShowNav] = useState('');
  const [minimizeNavbar, setMinimizeNavbar] = useState('');

  const sectionRefs = [
      { section: "Intro", ref: navbarRef },
      { section: "Projects", ref: projectsRef },
      { section: "About", ref: aboutRef },
      { section: "Contact", ref: contactRef },
  ];

  useEffect(() => {

      const handleScroll = () => {
          const { height: navbarHeight } = getDimensions(navbarRef.current);
          const scrollPosition = window.scrollY + navbarHeight;

          const selected = sectionRefs.find(({ section, ref }) => {
              const ele = ref.current;
              if (ele) {
                  const { offsetBottom, offsetTop } = getDimensions(ele);
                  return scrollPosition > offsetTop && scrollPosition < offsetBottom;
              }
          });


          if (scrollPosition > 500) {
            setShowNav('active');
          } else {
            setShowNav('');
          }

          if (selected && selected.section !== visibleSection) {
              setVisibleSection(selected.section);
          } else if (!selected && visibleSection) {
              setVisibleSection(undefined);
          }
      };
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return() => {
          window.removeEventListener("scroll", handleScroll);
      };
   }, [visibleSection]);

    
    return (
      <div className="App">
        <nav ref={navbarRef} className={`navbar ${showNav} ${minimizeNavbar}` }>
          <div className="nav-left">
            <button type="button" className="nav-logo" onClick={() => {scrollTo(navbarRef.current)}}>Zach Tollefson</button>
            <div className="nav-contact-methods">  
              <a href="https://github.com/ztollef" target="_blank"> <img src={github} width="30px" /></a>
              <a href="https://www.linkedin.com/in/zach-tollefson" target="_blank"><img src={linkedin} width="30px" /></a>
            </div>
          </div>
          <a className="icon" onClick={() => {if (minimizeNavbar === 'minimize') {
        setMinimizeNavbar('')
      } else {
        setMinimizeNavbar('minimize')
      }}}>
              <i className="fa fa-bars"></i>
            </a>
          <div className="nav-items">
            <button type="button" className={`nav-item ${visibleSection === "Projects" ? "selected" : ""}`} onClick={() => {scrollTo(projectsRef.current)}}>Projects</button>
            <button type="button" className={`nav-item ${visibleSection === "About" ? "selected" : ""}`} onClick={() => {scrollTo(aboutRef.current)}}>About</button>           
            <button type="button" className={`nav-item ${visibleSection === "Contact" ? "selected" : ""}`} onClick={() => {scrollTo(contactRef.current)}}>Contact</button>
          </div>
          
        </nav>
        <div className="section container-intro flex" id="Intro" ref={introRef}>           
          <div> 
            <h1 className="name">Zach Tollefson</h1>
            <h2 className="role">Full-Stack Developer</h2>
            <button className="cta-button" onClick={() => {scrollTo(projectsRef.current)}}>View my work <i className="arrow down"></i></button>
          </div> 
        </div>
        <div className="flex section" id="Projects" ref={projectsRef}>
          <Projects  />
        </div>
        <div className="flex section" id="About" ref={aboutRef} >
          <About />
        </div>
        <div className="flex section" id="Contact" ref={contactRef} >
          <Contact />
        </div>
        <div className="bottom-spacer" />
      </div>
    );
  }

export default App;
