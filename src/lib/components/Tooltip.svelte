<script lang="ts">
  type CardinalPositions = 'top' | 'right' | 'bottom' | 'left';
  type Position = CardinalPositions | `${CardinalPositions}-${'start' | 'end'}`;
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
  $: positionClass = positionClasses[position];
  let isOpen = false;
  let openTimeoutId: ReturnType<typeof setTimeout>;
  $: isValid = $$slots.default && $$slots.activator;
  const open = () => {
    if (!isValid) return;

    openTimeoutId = setTimeout(() => {
      isOpen = true;
    }, 500);
  };
  const close = () => {
    clearTimeout(openTimeoutId);
    isOpen = false;
  };
</script>

<div class="relative flex" on:mouseleave={close}>
  <div on:mouseenter={open} class={isOpen ? 'bg-gray-700' : ''}>
    <slot name="activator" />
  </div>

  {#if isOpen}
    <div class="absolute {positionClass} flex flex-col border border-sky-400 bg-gray-800 text-xl">
      <div class="p-3">
        <slot />
      </div>

      {#if $$slots.description}
        <div class="border-t border-sky-700 px-3 py-2 leading-normal font-sans text-lg">
          <slot name="description" />
        </div>
      {/if}
    </div>
  {/if}
</div>
