import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Home/Header.css';

export default function Header(props) {

    const { headerContent, currentPage, scrollToContact, isWindowLarge } = props

    console.log(currentPage === 1)
    console.log(isWindowLarge)

    let backgroundImage = currentPage === 1 ? "url('https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')" : isWindowLarge ? "url('https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80')" : ''

    console.log(backgroundImage)
    
    return (
    <header className="homeHeader">
        <div className="homeHeaderContent" style={{backgroundImage}}>
            <nav>
                <div className="navOptions">
                    <Link to='/' className={ currentPage === 0 ? "activeNav" : ''}>Home</Link>
                    <Link to='/work' className={ currentPage === 1 ? "activeNav" : ''}>Portfolio</Link>
                    <Link to='/#contactMe' onClick={scrollToContact} href="#contactMe">Contact Me</Link>
                </div>
                <div className="socailMedia">
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-github"></i>
                </div>
            </nav>
            <div className="homeHeaderInfo">
                <p className="homeHeaderContentSelf"><span className="homeHeaderHello">{headerContent.line1}</span>{headerContent.line2}</p>
                <p className="homeHeaderContentDes">{headerContent.line3}</p>  
                {
                    headerContent.button && <a href="#aboutMe" className="aboutMeButton">{headerContent.button}</a>
                }  
            </div>
            <div className="homeHeaderContentBack"></div>
        </div>
    </header>
    );
}
