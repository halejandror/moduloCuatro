import React, { useState, useEffect} from "react";
import CharacterCard from "../characterCard1";


function CharacterPage() {
  const [charactersList, setCharactersList] = useState([]);
    const [button, setButton] = useState(1)
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=" + button)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "soy data");
        setCharactersList(data.results);
      });
  }, [button]);

const buttonMenos =() => {
    setButton(button -1)
}
const buttonMas =() => {
    setButton (button +1)
}
  return (
    <>
      <div className="titulo">
        <h1>Personajes de Rick and Morty</h1>
      </div>

      <div className="cuerpo">
        {charactersList.map((character) => {
          return (
            <CharacterCard
              name={character.name}
              image={character.image}
              genre={character.gender}
              status={character.status}
            />
          );
        })}
      </div>
      <section className="buttons">
        <button 
        disabled= {button===1}
        onClick={buttonMenos}>Anterior</button>
        <p className="pnumber">{button}</p>
        <button 
        disabled= {button===42}
        onClick={buttonMas}>Siguiente</button>
      </section>
    </>
  );
}

export default CharacterPage;
