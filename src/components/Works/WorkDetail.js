import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import WorksData from '../../data/Works'
import '../../css/Work/Work.css';

export default class WorkDetail extends React.Component{

    state = {
        carouselIndex: 0,
    }

    handleSelect = (carouselIndex) => {
        this.setState({carouselIndex});
    }
    render(){

        const targetWorkData = WorksData.find(item => item.id === this.props.targetWorkId)

        const { carouselIndex } = this.state
        return(
            <div className="workDetail">
                <Carousel activeIndex={carouselIndex} onSelect={this.handleSelect}>
                    {
                        targetWorkData.images.map((img, index) => <Carousel.Item key={index*10}>
                            <img className="d-block w-100" src={img}/>
                        </Carousel.Item>)
                    }
                </Carousel>
                <div className="workContent">
                    <p className="workTitle">{targetWorkData.title}</p>
                    <p className="workTime">{targetWorkData.time}</p>
                    <p className="workDiscreption">{targetWorkData.discreption}</p>
                </div>
            </div>
        )
    }
}