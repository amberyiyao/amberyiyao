import React from 'react';
import WorksCategory from './WorksCategory'
import WorksPicutres from './WorksPicutres'

import WorksData from '../../data/Works'
import '../../css/Home/Works.css';

export default class Works extends React.Component {
    state = {
        categoryId: 0,
        data: WorksData.slice(0,9)
    }

    handleChangeCategory = (categoryId) => {
        let data
        if(categoryId ===0){
            data = WorksData.slice(0,9)
        } else {
            data = WorksData.filter(item => item.type === categoryId).slice(0,9)
        }
        
        this.setState({categoryId, data})
    }

    render(){
        return (
            <div className="homeWorks">
                <p className="homeWorksTitle">My Work</p>
                <WorksCategory categoryId={this.state.categoryId} onChangeCategory={this.handleChangeCategory}/>
                <WorksPicutres categoryId={this.state.categoryId} data={this.state.data}/>
                <a type="button" className="homeWorksViewMore">View More →</a>
            </div>
          );
    }
}
