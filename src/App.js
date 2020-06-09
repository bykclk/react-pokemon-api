import React from "react";
import "./App.css";
import { PokemonProvider } from "./contexts/PokemonContext";
import PokemonsList from "./components/PokemonsList";
import Pokedex from "./components/Pokedex";
import PokemonDetail from "./components/PokemonDetail";

const App = () => (
  <PokemonProvider>
    <div className="main">
      <PokemonsList />
      <Pokedex />
      <PokemonDetail />
    </div>
  </PokemonProvider>
);

export default App;
