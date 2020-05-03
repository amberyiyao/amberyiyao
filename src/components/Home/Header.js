import React from 'react';
import '../../css/Home/Header.css';

export default function Header() {
  return (
    <header className="homeHeader">
        
        <div className="homeHeaderContent">
            <nav>
                <div className="navOptions">
                    <a className="activeNav">Home</a>
                    <a>Work</a>
                    <a href="#contactMe">Contact Me</a>
                </div>
                <div className="socailMedia">
                    <i class="fab fa-linkedin-in"></i>
                    <i class="fab fa-github"></i>
                </div>
            </nav>
            <div className="homeHeaderInfo">
                <p className="homeHeaderContentSelf"><p className="homeHeaderHello">HELLO</p>I AM AMBER</p>
                <p className="homeHeaderContentDes">A full-stack developer with UI/UX design skills.</p>    
                <a href="#aboutMe" className="aboutMeButton">About Me</a>
            </div>
            <div className="homeHeaderContentBack"></div>
        </div>
    </header>
  );
}
