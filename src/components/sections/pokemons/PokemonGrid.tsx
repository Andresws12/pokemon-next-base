import React from "react";

import styles from "./Pokemon.module.scss";
import PokemonCard from "./PokemonCard";

import { SimplePokemon } from "@/constants/Interfaces/pokemons";

interface PokemonGridProps {
  pokemons: SimplePokemon[];
}

const PokemonGrid: React.FC<PokemonGridProps> = ({ pokemons }) => {
  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};

export default PokemonGrid;
