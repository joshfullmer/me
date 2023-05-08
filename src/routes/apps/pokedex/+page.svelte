<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	const pokemonResults = data.results;
	let query = '';

	$: filteredPokemon = pokemonResults.reduce<{ name: string; id: number }[]>(
		(prev, { name, url }) => {
			const id = url.split('/').at(-2);
			const parsedId = parseInt(id ?? 'nan', 10);
			if (name.includes(query) && parsedId < 10000) prev.push({ name, id: parsedId });

			return prev;
		},
		[]
	);
</script>

<div class="flex h-full flex-col items-center justify-center overflow-y-auto">
	<div class="relative flex w-full items-center justify-center">
		<input
			bind:value={query}
			placeholder="Search for pokemon..."
			class="rounded border border-slate-500 p-4 focus-within:border-sky-500 focus-within:ring-1 focus-within:ring-sky-500 focus:outline-none"
		/>
		{#if !!query}
			<div class="absolute top-full mt-4 grid w-3/4 grid-cols-3 place-items-center">
				{#each filteredPokemon as pokemon (pokemon.name)}
					<a href={`/apps/pokedex/${pokemon.id}`}
						><p>{pokemon.name}</p>
						<img
							src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
							alt=""
						/></a
					>
				{/each}
			</div>
		{/if}
	</div>
</div>
