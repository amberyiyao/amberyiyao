import React from 'react';
import Header from '../components/Home/Header'
import AboutMe from '../components/Home/AboutMe'
import Works from '../components/Home/Works'
import ContactMe from '../components/Home/ContactMe'

import HeaderImage from '../img/homeBack.png'
import '../css/Home/Home.css'
export default class Home extends React.Component{
    render(){

        return (
            <div className="home">
                <div className="Back">
                    <img className="BackImage" src={HeaderImage}/>
                </div>
                <main className="homeMain">
                    <div className="shadowBox">
                        <Header/>
                        <AboutMe/>
                        <Works/>
                        <ContactMe/>
                    </div>
                   
                </main>
            </div>
          );
    }

}