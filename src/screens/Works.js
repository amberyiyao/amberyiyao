import React from 'react';
import Header from '../components/Header'
import Works from '../components/Works'

import '../css/Work/Work.css'


export default class WorkPage extends React.Component {

    state = {
        currentPage: 1,
        headerContent : {
            line1: 'POTFOLIO',
            line2: 'MY WORKS',
            line3: 'I like both development and design'
        }
    }

    render(){
        const { currentPage, headerContent } = this.state
        return(
            <div className="WorkPage">
                <div className="shadowBox">
                    <Header currentPage={currentPage} headerContent={headerContent}/>
                    <Works currentPage={currentPage}/>
                </div>
            </div>
        )
    }
}