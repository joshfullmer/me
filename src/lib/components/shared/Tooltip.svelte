<script lang="ts">
	import { tick } from 'svelte';

	type CardinalPositions = 'top' | 'right' | 'bottom' | 'left';
	type Position = CardinalPositions | `${CardinalPositions}-${'start' | 'end'}`;
	type OppositePositions = {
		[Key in Position]: Position;
	};
	const oppositePositions: OppositePositions = {
		'top-start': 'bottom-start',
		top: 'bottom',
		'top-end': 'bottom-end',
		'right-start': 'left-start',
		right: 'left',
		'right-end': 'left-end',
		'bottom-start': 'top-start',
		bottom: 'top',
		'bottom-end': 'top-end',
		'left-start': 'right-start',
		left: 'right',
		'left-end': 'right-end'
	};
	type PositionClass =
		| `${CardinalPositions}-full ${CardinalPositions}-1/2 -translate-${'x' | 'y'}-1/2`
		| `${CardinalPositions}-full ${CardinalPositions}-0`;
	const positionClasses: { [Key in Position]: PositionClass } = {
		'top-start': 'bottom-full left-0',
		top: 'bottom-full left-1/2 -translate-x-1/2',
		'top-end': 'bottom-full right-0',
		'right-start': 'left-full top-0',
		right: 'left-full top-1/2 -translate-y-1/2',
		'right-end': 'left-full bottom-0',
		'bottom-start': 'top-full left-0',
		bottom: 'top-full left-1/2 -translate-x-1/2',
		'bottom-end': 'top-full right-0',
		'left-start': 'right-full top-0',
		left: 'right-full top-1/2 -translate-y-1/2',
		'left-end': 'right-full bottom-0'
	};
	export let position: Position = 'top-start';
	$: oppositePosition = oppositePositions[position];
	let flipPosition = false;
	$: positionClass = flipPosition ? positionClasses[oppositePosition] : positionClasses[position];
	let isOpen = false;
	let openTimeoutId: ReturnType<typeof setTimeout>;
	$: isValid = $$slots.default && $$slots.activator;
	const open = () => {
		if (!isValid) return;

		openTimeoutId = setTimeout(async () => {
			isOpen = true;
			await tick();
			if (activator && tooltip) {
				const { top, right, left, bottom } = activator.getBoundingClientRect();
				const { height, width } = tooltip.getBoundingClientRect();
				const windowHeight = window.innerHeight;
				const windowWidth = window.innerWidth;

				if (position.includes('top') && top < height) {
					flipPosition = true;
				}

				if (position.includes('right') && windowWidth - right < width) {
					flipPosition = true;
				}

				if (position.includes('bottom') && windowHeight - bottom < height) {
					flipPosition = true;
				}

				if (position.includes('left') && left < width) {
					flipPosition = true;
				}
			}
		}, 500);
	};
	const close = () => {
		clearTimeout(openTimeoutId);
		isOpen = false;
	};

	let activator: HTMLDivElement;
	let tooltip: HTMLDivElement;
</script>

<div class="relative flex" on:mouseleave={close}>
	<div bind:this={activator} on:mouseenter={open} class={isOpen ? 'bg-gray-700' : ''}>
		<slot name="activator" />
	</div>

	{#if isOpen}
		<div
			bind:this={tooltip}
			class="absolute {positionClass} z-10 flex flex-col border border-sky-400 bg-gray-800 text-xl"
		>
			<div class="p-3">
				<slot />
			</div>

			{#if $$slots.description}
				<div class="border-t border-sky-700 px-3 py-2 font-sans text-lg leading-normal">
					<slot name="description" />
				</div>
			{/if}
		</div>
	{/if}
</div>
