import React from 'react';
import RickAndMortyCharacterCard from './components/RickAndMortyCharacterCard';
import './App.css'

function App() {
  return (
    <div>
      <div className='titulo'>
        <h1>Personajes de Rick and morty</h1></div>
      <div className='boder'>  
      <RickAndMortyCharacterCard id={1}/>
      <RickAndMortyCharacterCard id={2}/>
      <RickAndMortyCharacterCard id={3}/>
      <RickAndMortyCharacterCard id={10}/>
      <RickAndMortyCharacterCard id={4}/>
      <RickAndMortyCharacterCard id={5}/>

      </div>



    </div>
  );
}

export default App;
