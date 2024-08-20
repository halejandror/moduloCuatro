import React, { useState, useEffect } from "react";
import CharacterCard from "../characterCard1";
import { useLocation, useNavigate } from "react-router-dom";

const ShearchPage = () => {
  const [charactersList, setCharacterList] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const urlData = useLocation();
  const queryParams = new URLSearchParams(urlData.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/?character=${query}`);
    } else {
      navigate(`/`);
    }
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      if (queryParams.get("character")) {
        const url = `https://rickandmortyapi.com/api/character/?name=${queryParams.get(
          "character"
        )}`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setCharacterList(data.results);
        } catch (error) {
          console.error("Error fetching data: ", error);
          setCharacterList([]);
        }
      } else {
        const url = `https://rickandmortyapi.com/api/character/`;
        try {
          const res = await fetch(url);
          const data = await res.json();
          setCharacterList(data.results);
        } catch (error) {
          console.error("Error fetching data: ", error);
          setCharacterList([]);
        }
      }
    };
    fetchCharacters();
  }, [queryParams]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Search">Buscar</label>
          <input type="search" onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Buscar</button>
        </form>
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
        })        
        }
      </div>
    </>
  );
};

export default ShearchPage;
