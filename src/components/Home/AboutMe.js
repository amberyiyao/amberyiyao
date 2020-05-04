import React from 'react';
import '../../css/Home/AboutMe.css';

export default function Header() {
  return (
    <div className="aboutMe" id="aboutMe">
        <div className="aboutMeInfo">
            <p className="aboutMeInfoTitle">ABOUT ME</p>
            <p className="aboutMeInfoDes">I am an ambitious, adventurous, assiduous, and animated full-stack developer with UI/UX design skills. Innovative optimized solution seeker.  Excited to be a development as well as a designer. </p>
            <p className="abouteMeSkillTitle">CORE SKILLS</p>
            <div className="abouteMeSkillIcon">
              <div className="abouteMeSkillIconItem"><i className="fab fa-html5"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-css3-alt"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-js"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-node"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-npm"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-react"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-git"></i></div>
              <div className="abouteMeSkillIconItem"><i className="fab fa-adobe"></i></div>
            </div>
        </div>
    </div>
  );
}
