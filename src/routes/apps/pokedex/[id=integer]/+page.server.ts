import { PokemonResponseSchema } from '$lib/schemas/pokemon.schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${event.params.id}`);
	const data = await response.json();
	return PokemonResponseSchema.parse(data);
};
