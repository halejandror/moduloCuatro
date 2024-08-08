import React from 'react';

function Image(props) {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return <div className='imf'><img src={props.url} alt="Foto de el artista/personaje" /></div>;
}

export default Image;