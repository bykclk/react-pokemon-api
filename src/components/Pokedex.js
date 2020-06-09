import React, { useContext } from "react";
import { PokemonContext } from "./../contexts/PokemonContext";
import Pokemon from "./Pokemon";

const Pokedex = () => {
  const { capturedPokemons, release } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Pokedex</h2>

      <div className="pokemon-cards">
        {capturedPokemons.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            onClick={release}
            buttonLabel="-"
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
