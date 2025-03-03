import { Metadata } from "next";

import PokemonGrid from "@/components/sections/pokemons/PokemonGrid";
import { getPokemons } from "@/services/pokemon.service";

export const metadata: Metadata = {
  title: "Listado de Pokemons",
  description: "Listado completo de Pokémons disponibles",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <section>
      <header>
        <h1>Listado de Pokémon</h1>
      </header>

      <main>
        <PokemonGrid pokemons={pokemons} />
      </main>
    </section>
  );
}
