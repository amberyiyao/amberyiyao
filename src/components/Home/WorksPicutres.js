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
                    <p className="homeWorksPicutresImgItemTitle">{this.props.title}</p>
                    <i className="fas fa-arrow-circle-right"></i>
                </div>
            </div>
        )
    }
}

export default function WorksPicutres(props) {
    const { data, categoryId } = props 

    const gridStyle = {
        gridTemplateColumns: '1fr 1fr'
    }

    return (
        <div className="homeWorksPicutres" style={ categoryId === 2 ? gridStyle : {} }>
            {
                data.map((item,index) => <ImgItem img={item.img} key={index} title={item.title}/>)
            }
        </div>
    );
}
