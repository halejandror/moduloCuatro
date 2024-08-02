import React from 'react';
import Title from './titulo';
import Image from './imagenes';
import Details from './details';


function CharacterCard(props) {
  console.log(props, 'props');
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <div className='bode'>
      {/* Nombre de el personaje */}
      <Title title={props.name}/>
      {/* Imagen de el personaje */}
      <Image url={props.image} />
      {/* Detalles de el personaje */}
      <Details 
        genre={props.genre} 
        status={props.status} 
      />
    </div>
  );
}

export default CharacterCard;