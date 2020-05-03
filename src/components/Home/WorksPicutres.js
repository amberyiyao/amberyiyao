import React from 'react';
import '../../css/Home/Works.css';

class ImgItem extends React.Component{

    state = {
        isHover: false
    }

    taggleIsHover = () => {
        this.setState({isHover: !this.state.isHover})
    }

    render(){
        const {isHover } = this.state
        return(
            <div className={isHover? 'homeWorksPicutresImgItem onMouseOver' :"homeWorksPicutresImgItem" } onMouseOver={this.taggleIsHover} onMouseOut={this.taggleIsHover}>
                <img className={ isHover ? 'homeWorksPicutresImg onMouseOver' : "homeWorksPicutresImg"} src={this.props.img}/>
                <div className="homeWorksInfo">
                    <p class="homeWorksPicutresImgItemTitle">{this.props.title}</p>
                    <i class="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        )
    }
}

export default function WorksPicutres(props) {
    // const { data } = props 
    const data = [{
        id:1,
        img: 'https://i.pinimg.com/564x/8d/ab/27/8dab27da0a5bb1cb7336b4c4516b6ec1.jpg',
        title:'Title 01'
    },{
        id:2,
        img: 'https://i.pinimg.com/564x/27/18/9a/27189a2c4823b68e0e626d6ee2e442b3.jpg',
        title:'Title 02'
    },{
        id:3,
        img: 'https://i.pinimg.com/564x/8d/ab/27/8dab27da0a5bb1cb7336b4c4516b6ec1.jpg',
        title:'Title 03'
    },{
        id:4,
        img: 'https://i.pinimg.com/564x/27/18/9a/27189a2c4823b68e0e626d6ee2e442b3.jpg',
        title:'Title 04'
    },{
        id:5,
        img: 'https://i.pinimg.com/564x/8d/ab/27/8dab27da0a5bb1cb7336b4c4516b6ec1.jpg',
        title:'Title 05'
    },{
        id:6,
        img: 'https://i.pinimg.com/564x/27/18/9a/27189a2c4823b68e0e626d6ee2e442b3.jpg',
        title:'Title 06'
    },{
        id:7,
        img: 'https://i.pinimg.com/564x/8d/ab/27/8dab27da0a5bb1cb7336b4c4516b6ec1.jpg',
        title:'Title 07'
    },{
        id:8,
        img: 'https://i.pinimg.com/564x/27/18/9a/27189a2c4823b68e0e626d6ee2e442b3.jpg',
        title:'Title 08'
    },{
        id:9,
        img: 'https://i.pinimg.com/564x/8d/ab/27/8dab27da0a5bb1cb7336b4c4516b6ec1.jpg',
        title:'Title 09'
    }]
    return (
        <div className="homeWorksPicutres">
            {
                data.map(item => <ImgItem img={item.img} key={item.title} title={item.title}/>)
            }
        </div>
    );
}
