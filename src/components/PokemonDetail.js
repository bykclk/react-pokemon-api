import React, { useContext } from "react";
import { PokemonContext } from "./../contexts/PokemonContext";
import ProgressBar from "./ProgressBar";
import PokemonTypes from "./PokemonTypes";

const PokemonDetail = () => {
  const { pokemon } = useContext(PokemonContext);

  if (pokemon) {
    const { name, sprites, stats, types, moves } = pokemon;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
        default:
          break;
      }
    });
    const height =
      Math.round((pokemon.height * 0.328084 + 0.00001) * 100) / 100;

    const weight =
      Math.round((pokemon.weight * 0.220462 + 0.00001) * 100) / 100;

    return (
      <div className="pokemon-detail">
        <h2>Pokemons Detail</h2>
        <div className="pokemon-detail-wrapper">
          <h2 className="pokemon-detail-title">
            {name
              .toLowerCase()
              .split(" ")
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </h2>
          <div className="pokemon-detail-content">
            <div className="pokemon-detail-left">
              <img
                src={sprites.front_default}
                className="pokemon-detail-img"
                alt={name}
              />
            </div>
            <div className="pokemon-detail-right">
              <h4 className="pokemon-detail-title">Info</h4>
              <div className="pokemon-ability-info">
                <p>Height: {height} ft.</p>
                <p>Weight: {weight} lbs</p>
              </div>
              <h4 className="pokemon-detail-title">Stats</h4>
              <div className="pokemon-detail-stats">
                <ProgressBar value={hp} />
                <ProgressBar value={attack} />
                <ProgressBar value={defense} />
                <ProgressBar value={speed} />
                <ProgressBar value={specialAttack} />
                <ProgressBar value={specialDefense} />
              </div>
              <h4 className="pokemon-detail-title">Type</h4>
              <div className="pokemon-detail-types">
                {types
                  .map((type) => type.type.name)
                  .map((type) => (
                    <PokemonTypes type={type} key={`${name}-${type}`} />
                  ))}
              </div>
              <h4 className="pokemon-detail-title">Moves</h4>
              <div className="pokemon-detail-moves">
                {moves.map((move) => (
                  <div className="badge" key={move.move.name}>
                    {move.move.name
                      .split("-")
                      .map((c) =>
                        c
                          .toLowerCase()
                          .split(" ")
                          .map(
                            (s) => s.charAt(0).toUpperCase() + s.substring(1)
                          )
                          .join(" ")
                      )
                      .join(" ")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <React.Fragment />;
};

export default PokemonDetail;
