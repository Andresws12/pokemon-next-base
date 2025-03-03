import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./Pokemon.module.scss";

import { SimplePokemon } from "@/constants/Interfaces/pokemons";

const PokemonCard: React.FC<SimplePokemon> = ({ id, name }) => {
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className={`${styles.card} card`}>
      <Link href={`/dashboard/pokemons/${name}`} legacyBehavior>
        <div>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={120}
            height={120}
            alt={`Imagen de ${formattedName}`}
            priority={false}
          />
          <div>
            <span>#{id}</span>
            <h2>{formattedName}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;
