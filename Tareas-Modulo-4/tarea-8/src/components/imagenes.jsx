import React from "react";

function Image(props) {
  
  return (
    <div className="imf">
      <img src={props.url} alt="Foto de el artista/personaje" />
    </div>
  );
}

export default Image;
