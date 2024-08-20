import React from "react";
import Title from "./titulo";
import Image from "./imagenes";
import Details from "./details";

function CharacterCard(props) {
  console.log(props, "props");

  return (
    <div className="container">
      <Title title={props.name} />

      <Image url={props.image} />

      <Details genre={props.genre} status={props.status} />
    </div>
  );
}

export default CharacterCard;
