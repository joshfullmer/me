import { z } from 'zod';

export const PokemonSchema = z.object({
	pokemon: z.object({})
});

export const PokemonListResponseSchema = z.object({
	count: z.number(),
	next: z.string().nullable(),
	previous: z.string().nullable(),
	results: z.array(z.object({ name: z.string(), url: z.string() }))
});
export type PokemonListResponse = z.infer<typeof PokemonListResponseSchema>;

export const PokemonType = {
	Normal: 'normal',
	Fire: 'fire',
	Water: 'water',
	Grass: 'grass',
	Electric: 'electric',
	Ice: 'ice',
	Fighting: 'fighting',
	Poison: 'poison',
	Ground: 'ground',
	Flying: 'flying',
	Psychic: 'psychic',
	Bug: 'bug',
	Rock: 'rock',
	Ghost: 'ghost',
	Dark: 'dark',
	Dragon: 'dragon',
	Steel: 'steel',
	Fairy: 'fairy'
} as const;
export const PokemonTypeSchema = z.nativeEnum(PokemonType);
export type PokemonType = z.infer<typeof PokemonTypeSchema>;

export const PokemonResponseSchema = z.object({
	name: z.string(),
	sprites: z.object({
		front_default: z.string().nullable()
	}),
	types: z.array(
		z.object({
			slot: z.number(),
			type: z.object({
				name: PokemonTypeSchema,
				url: z.string()
			})
		})
	)
});
export type PokemonResponse = z.infer<typeof PokemonResponseSchema>;
