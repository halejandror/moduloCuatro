import './App.css'
import React from 'react';
import Title from './components/titulo';
import Image from './components/imagenes';
import Details from './components/details';
function App() {
 
  return (
    <>
    <div className='rick'>

      <div className='div1'>
      <Image
        url={'Rick.png'} 
      />
    </div>
    <div className='name1'>
      <Title
        title={"Rick Sanchez"}
      />
    </div>
      <Details
        genre={'masculino'} 
        status={'vivo'} 
      />
      </div>
      <div className='Summer'>
          <div className='div2'>  
            <Image
        url={'./Summer.png'} 
      />
</div>
<div className='name2'>
            <Title
        title={"Summer Smith"}
      />
</div>
      <Details
        genre={'femenino'} 
        status={'vivo'} 
      />   
      </div>
      <div className='Jerry'>
    <div className='div3'>
      <Image
        url={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHheEGXxfNHWcwHWMzj6BOs_KLy0lnwBXPfg&s'}
      />
      </div>
      <div className='name3'>
      <Title
        title={"Jerry Smith"}
      />
    </div>
      <Details
        genre={'masculino'} 
        status={'vivo'} 
      />
    </div>
    </>
  );
}

export default App;