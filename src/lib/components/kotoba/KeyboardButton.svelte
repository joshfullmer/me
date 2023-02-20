<script lang="ts">
	import type { LetterStatus } from '$lib/types/kotoba.types';

	export let large = false;
	export let type: LetterStatus = 'none';

	$: typeClasses = {
		correct: 'bg-green-400 text-gray-800',
		incorrect: 'bg-gray-900',
		none: 'bg-gray-600 hover:bg-gray-500 active:bg-gray-700',
		present: 'bg-yellow-300 text-gray-800'
	}[type];

	console.log({ typeClasses, type });
</script>

<button
	class="flex items-center justify-center rounded py-3.5 {typeClasses} {large
		? 'flex-[1.5]'
		: 'flex-1'}"
	on:click
>
	<slot />
</button>
