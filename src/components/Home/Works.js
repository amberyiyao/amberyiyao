import React from 'react';
import WorksCategory from './WorksCategory'
import WorksPicutres from './WorksPicutres'
import '../../css/Home/Works.css';

export default class Works extends React.Component {
    state = {
        categoryId: 0
    }

    handleChangeCategory = (categoryId) => {
        this.setState({categoryId})
    }

    render(){
        return (
            <div className="homeWorks">
                <p className="homeWorksTitle">My Work</p>
                <WorksCategory categoryId={this.state.categoryId} onChangeCategory={this.handleChangeCategory}/>
                <WorksPicutres/>
                <a type="button" className="homeWorksViewMore">View More →</a>
            </div>
          );
    }
}
