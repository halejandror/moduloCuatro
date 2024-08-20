import React from "react";

function Details(props) {
  return (
    <div>
      <p className="sob">
        <b className="genre1">Genero:</b> {props.genre}
      </p>
      <p className="sob2">
        <b className="genre1">Estado:</b> {props.status}
      </p>
    </div>
  );
}
export default Details;
