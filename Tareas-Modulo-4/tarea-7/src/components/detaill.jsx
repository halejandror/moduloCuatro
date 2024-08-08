import React from 'react';

function Details(props) {

  return (
    <div>
        <p className='sob'>
          <b>Genero:</b> {props.genre}
        </p>
        <p className='sob2'>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}
export default Details;