import React from 'react';
import Header from '../components/Header'
import AboutMe from '../components/Home/AboutMe'
import Works from '../components/Works'
import ContactMe from '../components/Home/ContactMe'
import '../css/Home/Home.css'
export default class Home extends React.Component{

    state = {
        currentPage: 0,
        headerContent : {
            line1: 'HELLO',
            line2: 'I AM AMBER',
            line3: 'A full-stack developer with UI/UX design skills.',
            button: 'About Me'
        }
    }

    contactMeRef = React.createRef()

    componentDidMount(){
        if(window.location.hash === '#contactMe'){
            this.scrollToContact()
        }
    }
    
    scrollToContact = () => {
        this.contactMeRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    render(){
        return (
            <div className="homeMain">
                <div className="shadowBox">
                    <Header scrollToContact={this.scrollToContact} currentPage={this.state.currentPage} headerContent={this.state.headerContent}/>
                    <AboutMe/>
                    <Works currentPage={0}/>
                    <ContactMe refC={this.contactMeRef}/>
                </div>
            </div>
          );
    }

}