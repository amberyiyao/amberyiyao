import React from 'react';
import '../../css/Home/Works.css';

export default function WorksCategory(props) {
  const {onChangeCategory, categoryId} = props
  return (
    <div className="homeWorksCategory">
        <p onClick={() => onChangeCategory(0)} className={categoryId == 0? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>ALL</p>
        <p onClick={() => onChangeCategory(1)} className={categoryId == 1? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>DEVELOPMENT</p>
        <p onClick={() => onChangeCategory(2)} className={categoryId == 2? "homeWorksCategoryItem active" : "homeWorksCategoryItem"}>DESIGN</p>
    </div>
  );
}
