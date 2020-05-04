import React from 'react';
import WorksCategory from './Home/WorksCategory'
import WorksPicutres from './Home/WorksPicutres'

import WorksData from '../data/Works'
import '../css/Home/Works.css';

export default class Works extends React.Component {
    state = {
        categoryId: 0,
        data: WorksData
    }

    handleChangeCategory = (categoryId, isSlice) => {
        let data
        if(categoryId === 0){
            data = isSlice ? WorksData.slice(0,9) : WorksData
        } else {
            data = WorksData.filter(item => item.type === categoryId)
            data = isSlice ? data.slice(0,9) : data
        }
        
        this.setState({categoryId, data})
    }

    componentDidMount(){
        const { currentPage } = this.props
        if ( currentPage === 0){
            this.handleChangeCategory(0, true)
        } else {
            this.handleChangeCategory(0, false)
        }
    }

    render(){
        const { currentPage } = this.props
        return (
            <div className="homeWorks">
                { currentPage === 0 ? <p className="homeWorksTitle">My Work</p> : ''}
                <WorksCategory currentPage={currentPage} categoryId={this.state.categoryId} onChangeCategory={this.handleChangeCategory}/>
                <WorksPicutres currentPage={currentPage} categoryId={this.state.categoryId} data={this.state.data}/>
                { currentPage === 0 ? <a type="button" className="homeWorksViewMore">View More →</a> : ''}
            </div>
          );
    }
}
