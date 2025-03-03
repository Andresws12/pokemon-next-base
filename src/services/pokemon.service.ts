import {
  PokemonsResponse,
  SimplePokemon,
} from "@/constants/Interfaces/pokemons";

const POKEMON_API_BASE_URL = "https://pokeapi.co/api/v2";
const REVALIDATION_TIME = 60 * 60 * 30 * 6; // 6 días en segundos

export async function getPokemons(
  limit = 75,
  offset = 0,
): Promise<SimplePokemon[]> {
  try {
    const data: PokemonsResponse = await fetch(
      `${POKEMON_API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`,
      {
        next: {
          revalidate: REVALIDATION_TIME,
        },
      },
    ).then((res) => {
      if (!res.ok) {
        throw new Error(`Error al obtener los pokemons: ${res.status}`);
      }
      return res.json();
    });

    return data.results.map((pokemon) => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
    }));
  } catch (error) {
    console.error("Error al obtener los Pokémon:", error);
    throw error;
  }
}
