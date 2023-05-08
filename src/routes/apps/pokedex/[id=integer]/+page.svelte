<script lang="ts">
	import { PokemonType } from '$lib/schemas/pokemon.schema';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	$: types = data.types.map(({ type }) => type.name);

	const typeClass = {
		[PokemonType.Normal]: 'bg-slate-200 text-gray-700',
		[PokemonType.Fire]: 'bg-orange-500',
		[PokemonType.Water]: 'bg-blue-500',
		[PokemonType.Grass]: 'bg-emerald-500',
		[PokemonType.Electric]: 'bg-yellow-300 text-gray-700',
		[PokemonType.Ice]: 'bg-cyan-300 text-gray-700',
		[PokemonType.Fighting]: 'bg-red-700',
		[PokemonType.Poison]: 'bg-violet-800',
		[PokemonType.Ground]: 'bg-amber-900',
		[PokemonType.Flying]: 'bg-blue-300 text-gray-700',
		[PokemonType.Psychic]: 'bg-purple-500',
		[PokemonType.Bug]: 'bg-lime-400 text-gray-700',
		[PokemonType.Rock]: 'bg-stone-700',
		[PokemonType.Ghost]: 'bg-fuchsia-800',
		[PokemonType.Dark]: 'bg-neutral-800 ring-1 ring-neutral-500',
		[PokemonType.Dragon]: 'bg-cyan-700',
		[PokemonType.Steel]: 'bg-gray-500',
		[PokemonType.Fairy]: 'bg-pink-400'
	} satisfies Record<PokemonType, string>;
</script>

<div class="relative mx-auto mt-8 flex w-3/4 flex-col items-center">
	<a
		href="/apps/pokedex"
		class="absolute left-0 inline-flex items-center gap-2 rounded px-3 py-2 text-sky-400 ring-2 ring-sky-800 hover:bg-gray-700 hover:text-gray-300 active:bg-gray-900"
		>Back</a
	>
	<h1>{data.name}</h1>
	<img src={data.sprites.front_default} alt="Image for {data.name}" />

	<div class="flex gap-4">
		{#each types as type}
			<div class="rounded px-2 py-1 {typeClass[type]}">{type}</div>
		{/each}
	</div>
</div>
