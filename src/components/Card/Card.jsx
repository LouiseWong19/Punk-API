import React from "react";

import "./Card.scss";

const Card = (props) =>{
  // details that we need
  const {image, name, ph, abv, srm, detail} = props
  
  return <div className="cardContainer">
    <div className="cardContainer__image">
      <img src={image} alt="beer" className="cardContainer__image--beer"/>
    </div>
    <div className="cardContainer__info">
      <h3>{name}</h3>
      <div className="cardContainer__info--numbers">
        <p>pH</p> 
        <p>ABV</p>
        <p>SRM</p> 
        <p>{ph}</p>
        <p>{abv + "%"}</p>
        <p>{srm}</p>
      </div>
      <p>{detail}</p>
    </div>
  </div>

  
}

export default Card;