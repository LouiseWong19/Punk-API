import React from "react";
import CardList from "../../components/CardList/CardList";

const Main = (props) =>{
  const {beerArray} = props;
  return(
    <CardList beerArray={beerArray} />
  )
}

export default Main;