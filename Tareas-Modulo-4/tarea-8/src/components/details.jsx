import React from "react";

function Details(props) {

  
  return (
    <div>
      <p className="sobre">
        <b>Genero:</b> {props.genre}
      </p>
      <p className="sobre2">
        <b>Estado:</b> {props.status}
      </p>
    </div>
  );
}
export default Details;
