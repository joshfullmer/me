<script lang="ts">
  import { letters } from '$lib/data/letters';

  import type { GuessedLetters, Letter, LetterStatus } from '$lib/types/kotoba.types';

  import { createEventDispatcher } from 'svelte';

  import Icon from './Icon.svelte';
  import KeyboardButton from './KeyboardButton.svelte';

  const dispatch = createEventDispatcher();

  const handleKeydown = (event: KeyboardEvent) => {
    const { key, altKey, ctrlKey, metaKey } = event;
    if (altKey || ctrlKey || metaKey) return;

    if (letters.includes(key.toUpperCase() as Letter)) {
      dispatch('add', { letter: key.toUpperCase() });
    }

    if (key.toLowerCase() === 'backspace') {
      dispatch('remove');
    }

    if (key.toLowerCase() === 'enter') {
      dispatch('enter');
    }
  };

  const handleLetterClick = (letter: Letter) => {
    dispatch('add', { letter });
  };

  const handleBackspaceClick = () => {
    dispatch('remove');
  };

  export let guessedLetters: GuessedLetters;

  const getKeyboardButtonType = (letter: Letter): LetterStatus => {
    if (guessedLetters.correct.includes(letter)) return 'correct';

    if (guessedLetters.incorrect.includes(letter)) return 'incorrect';

    if (guessedLetters.present.includes(letter)) return 'present';

    return 'none';
  };

  const firstRowLetters: Letter[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  let firstRow: {
    type: LetterStatus;
    value: Letter;
  }[];
  $: firstRow = firstRowLetters.map((letter) => {
    return {
      type: getKeyboardButtonType(letter),
      value: letter
    };
  });
  const secondRowLetters: Letter[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  let secondRow: {
    type: LetterStatus;
    value: Letter;
  }[];
  $: secondRow = secondRowLetters.map((letter) => {
    return {
      type: getKeyboardButtonType(letter),
      value: letter
    };
  });
  const thirdRowLetters: Letter[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  let thirdRow: {
    type: LetterStatus;
    value: Letter;
  }[];
  $: thirdRow = thirdRowLetters.map((letter) => {
    return {
      type: getKeyboardButtonType(letter),
      value: letter
    };
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<footer class="flex flex-col gap-2 max-w-[500px] w-full mt-auto p-2">
  <section class="flex gap-2">
    {#each firstRow as { type, value }}
      <KeyboardButton {type} on:click={() => handleLetterClick(value)}>{value}</KeyboardButton>
    {/each}
  </section>
  <section class="flex gap-2">
    <div class="flex-[0.5]" />
    {#each secondRow as { type, value }}
      <KeyboardButton {type} on:click={() => handleLetterClick(value)}>{value}</KeyboardButton>
    {/each}
    <div class="flex-[0.5]" />
  </section>
  <section class="flex gap-2">
    <KeyboardButton large>ENTER</KeyboardButton>
    {#each thirdRow as { type, value }}
      <KeyboardButton {type} on:click={() => handleLetterClick(value)}>{value}</KeyboardButton>
    {/each}
    <KeyboardButton large on:click={handleBackspaceClick}
      ><Icon icon="ic:outline-backspace" /></KeyboardButton
    >
  </section>
</footer>
