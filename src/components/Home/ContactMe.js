import React from 'react';
import '../../css/Home/ContactMe.css';

export default function ContactMe(props) {
  return (
      <footer className="contactMe" id='contactMe' ref={props.refC}>
          <div className="contactMeMain">
            <p className="contactMeTitle">CONTECT ME</p>
            <form className="contactMeForm">
                <input className="contactMeInput" type="text" placeholder="Name"/>
                <input className="contactMeInput" type="text" placeholder="E-mail"/>
                <textarea className="contactMeTextarea" placeholder="Leave Message Here..."></textarea>
                <a className="contactMeBtn">Submit</a>
            </form>
          </div>
          
          <div className="contactMeBack"></div>
      </footer>
  );
}
