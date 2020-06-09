import React, { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import PokemonTypes from "./PokemonTypes";

export const Pokemon = ({ pokemon, onClick, buttonLabel }) => {
  const { setPokemon } = useContext(PokemonContext);

  const { name, sprites, types } = pokemon;

  const handlePokemonDetail = (e) => {
    e.preventDefault();
    setPokemon(pokemon);
  };
  return (
    <div className="pokemon-card">
      <img src={sprites.front_default} alt={name} />
      <h3 className="pokemon-card-title" onClick={handlePokemonDetail}>
        {name
          .toLowerCase()
          .split(" ")
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}
      </h3>
      <div className="pokemon-card-types">
        {types
          .map((type) => type.type.name)
          .map((type) => (
            <PokemonTypes type={type} key={`${name}-${type}`} />
          ))}
      </div>
      <button onClick={onClick(pokemon)} className="pokemon-card-btn">
        {buttonLabel}
      </button>
    </div>
  );
};

export default Pokemon;
