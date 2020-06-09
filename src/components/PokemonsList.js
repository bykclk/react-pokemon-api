import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import Pokemon from "./Pokemon";
import Loading from "./Loading";

const PokemonsList = () => {
  const { pokemons, capture, addPokemons } = useContext(PokemonContext);
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async (url) => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    const { results, next, previous } = data;

    setNextUrl(next);
    setPreviousUrl(previous);

    Promise.all(
      results.map(async (result) => {
        const { url } = result;
        const response = await fetch(url);
        return await response.json();
      })
    ).then((pokemons) => {
      addPokemons(pokemons);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemons(`${process.env.REACT_APP_API_URL}pokemon`);
  }, []);

  const handleNextPage = (e) => {
    e.preventDefault();
    fetchPokemons(nextUrl);
  };

  const handlePreviousPage = (e) => {
    e.preventDefault();
    fetchPokemons(previousUrl);
  };
  return (
    <div className="pokemon-list">
      <h2>Pokemons List</h2>

      {loading ? (
        <Loading />
      ) : (
        <div className="pokemon-list-wrapper">
          <div className="pokemon-cards">
            {pokemons.map((pokemon) => (
              <Pokemon
                pokemon={pokemon}
                onClick={capture}
                buttonLabel="+"
                key={pokemon.id}
              />
            ))}
          </div>
          <div className="pokemon-list-btns">
            {previousUrl && (
              <button className="pokemon-list-btn" onClick={handlePreviousPage}>
                Previous
              </button>
            )}
            {nextUrl && (
              <button className="pokemon-list-btn" onClick={handleNextPage}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonsList;
