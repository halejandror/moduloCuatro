import React, {useEffect, useState} from 'react'
import CharacterCard from './CharacterCard';

const RickAndMortyCharacterCard = (props) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [status, setStatus] = useState("");
  
    const rickAndMortyCharacterId = props.id;
  
    useEffect( () => {
      // Este useEffect se ejecutará una única vez cuando el componente se monte
      fetch("https://rickandmortyapi.com/api/character/" + rickAndMortyCharacterId)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setName(result.name)
        setImage(result.image)
        setGenre(result.species)      
        setStatus(result.status)
  
      }).catch((error) => {
        console.log(error);
      })
    },[])
  
    return (
      <div className='container'>
   
        <CharacterCard 
          name={name}
          image={image}
          genre={genre}
          status={status}
        />
      </div>
    );
  }



export default RickAndMortyCharacterCard