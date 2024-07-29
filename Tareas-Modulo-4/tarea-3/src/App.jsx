import './App.css'
import React from 'react';
import Title from './components/titulo';
import Image from './components/imagenes';
import Details from './components/details';
function App() {
  // Recuerda que este es solo un componente funcional, 
  // tu debes incluir estilos para hacerlo más atractivo
  return (
    <>
    <div className='rick'>
      {/* Titulo de el artista/personaje */}
      <Title
        title={"Rick Sanchez"}
      />
      {/* Imagen de el artista/personaje */}
      <Image
        url={'Rick.png'} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'masculino'} 
        status={'vivo'} 
      />
      </div>
      <div className='Summer'>
            {/* Titulo de el artista/personaje */}
            <Title
        title={"Summer Smith"}
      />
      {/* Imagen de el artista/personaje */}
      <Image
        url={'./Summer.png'} 
      />
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'femenino'} 
        status={'vivo'} 
      />      {/* Titulo de el artista/personaje */}
      </div>
      <div className='Jerry'>
      <Title
        title={"Jerry Smith"}
      />
      {/* Imagen de el artista/personaje */}
      <Image
        url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHheEGXxfNHWcwHWMzj6BOs_KLy0lnwBXPfg&s'}
      />    
      {/* Detalles de el artista/personaje */}
      <Details
        genre={'masculino'} 
        status={'vivo'} 
      />
    </div>
    </>
  );
}

export default App;