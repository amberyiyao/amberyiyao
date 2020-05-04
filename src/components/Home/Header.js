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
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-github"></i>
                </div>
            </nav>
            <div className="homeHeaderInfo">
                <p className="homeHeaderContentSelf"><span className="homeHeaderHello">HELLO</span>I AM AMBER</p>
                <p className="homeHeaderContentDes">A full-stack developer with UI/UX design skills.</p>    
                <a href="#aboutMe" className="aboutMeButton">About Me</a>
            </div>
            <div className="homeHeaderContentBack"></div>
        </div>
    </header>
  );
}
