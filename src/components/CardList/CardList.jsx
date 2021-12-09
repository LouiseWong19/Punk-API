import React from "react";
import "./CardList.scss";
import Card from "../Card/Card";

const CardList = (props) =>{
  const {beerArray} = props;


  return (
    <div className = "cards">
      {beerArray.map((item)=>{
        return <Card name={item.name} image={item.image_url} ph={item.ph} abv={item.abv} srm={item.srm} detail={item.description}/>
      })}
    </div>
  )
}

export default CardList;