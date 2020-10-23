import React, {useRef, useEffect, useState} from 'react';
import "./navbar.css"
import  projectsRef from '../projects/projects';
import aboutRef from '../about/about';

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

function Navbar() {

    const [visibleSection, setVisibleSection] = useState();

    const navbarRef = useRef(null);
    const sectionRefs = [
        { section: "Projects", ref: projectsRef },
        { section: "About", ref: aboutRef },
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

            if (selected && selected.section !== visibleSection) {
                setVisibleSection(selected.section);
            } else if (!selected && visibleSection) {
                setVisibleSection(undefined);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll, handleScroll");
        };
     }, [visibleSection]);

    return(
        <nav id="navbar" ref={navbarRef} className='navbar active'>
                <button type="button" className="nav-logo">Zach Tollefson.</button>
                <button type="button" className={`nav-item ${visibleSection === "Projects" ? "selected" : ""}`} onClick={() => {scrollTo(projectsRef.current)}}>Projects</button>
                <button type="button" className={`nav-item ${visibleSection === "About" ? "selected" : ""}`} onClick={() => {scrollTo(aboutRef.current)}}>About</button>
            
        </nav>
    )
}

export default Navbar;
