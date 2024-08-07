import React, { useEffect, useState } from "react";
import CharacterCard from "./components/characterCard1";
import "./App.css";

function App() {
  const [charactersList, setCharactersList] = useState([]);

  
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "soy data");
        setCharactersList(data.results);
      });
  }, []);

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
    </>
  );
}

export default App;
