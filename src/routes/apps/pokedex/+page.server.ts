import { PokemonListResponseSchema } from '$lib/schemas/pokemon.schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
	const data = await response.json();
	return PokemonListResponseSchema.parse(data);
};
