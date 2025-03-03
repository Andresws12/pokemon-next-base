export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface SimplePokemon {
  id: string;
  name: string;
}
