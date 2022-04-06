<script lang="ts">
  import Header from '$lib/components/kotoba/Header.svelte';
  import Keyboard from '$lib/components/kotoba/Keyboard.svelte';
  import { ANSWERS } from '$lib/data/answers';
  import { letters } from '$lib/data/letters';
  import { WORDS } from '$lib/data/words';
  import type {
    Guess,
    GuessedLetters,
    Letter,
    LetterGuess,
    LetterStatus
  } from '$lib/types/kotoba.types';
  import { shuffleBySeed } from '$lib/utils/shuffle';

  const { shuffle } = shuffleBySeed();
  const daysSinceEpoch = Math.floor(Date.now() / 1000 / 60 / 60 / 24);
  const todayIndex = daysSinceEpoch % ANSWERS.length;
  const shuffledAnswers = shuffle(ANSWERS);
  const today = shuffledAnswers[todayIndex];
  const todayLetters = today.toUpperCase().split('');

  let guesses: Guess[] = [
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    },
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    },
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    },
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    },
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    },
    {
      letters: [
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' },
        { status: 'none', value: '' }
      ],
      status: 'incomplete'
    }
  ];

  $: currentGuess = guesses.find((guess) => guess.status === 'incomplete');

  const handleAdd = ({ detail }: CustomEvent<{ letter: Letter }>) => {
    if (!currentGuess) return;

    const { letter } = detail;

    const firstMissing = currentGuess.letters.findIndex((letter) => letter.value === '');

    if (firstMissing >= 0) {
      currentGuess.letters[firstMissing].value = letter;
      guesses = [...guesses];
    }
  };

  const handleRemove = () => {
    if (!currentGuess) return;

    const firstMissing = currentGuess.letters.findIndex((letter) => letter.value === '');

    if (firstMissing === -1) {
      currentGuess.letters[4].value = '';
      guesses = [...guesses];
    }

    if (firstMissing > 0) {
      currentGuess.letters[firstMissing - 1].value = '';
      guesses = [...guesses];
    }
  };

  const handleEnter = () => {
    if (!currentGuess) return;

    // TODO: show warning/shake guess when word is incomplete
    if (!currentGuess.letters.every((letter) => letter.value !== '')) return;

    // TODO: show warning/shake guess when word is not in list
    const isWordInList = WORDS.includes(
      currentGuess.letters
        .map(({ value }) => value)
        .join('')
        .toLowerCase()
    );
    if (!isWordInList) return;

    todayLetters.forEach((letter, index) => {
      if (!currentGuess) return;

      if (letter === currentGuess?.letters[index].value) {
        currentGuess.letters[index].status = 'correct';

        return;
      }

      if (todayLetters.includes(currentGuess?.letters[index].value)) {
        // TODO modify logic to handle duplicate letters present
        currentGuess.letters[index].status = 'present';

        return;
      }

      currentGuess.letters[index].status = 'incorrect';
    });

    if (currentGuess.letters.every((letter) => letter.status === 'correct')) {
      alert('Yay!');
    }

    currentGuess.status = 'complete';
    guesses = [...guesses];

    // TODO: check if final guess
    if (guesses.every((guess) => guess.status === 'complete')) {
      alert('all done');
    }
  };

  const getLetterClasses = (letter: LetterGuess) => {
    return {
      none: 'border-2 border-gray-200',
      incorrect: 'bg-gray-600',
      present: 'bg-yellow-300 text-gray-800',
      correct: 'bg-green-400 text-gray-800'
    }[letter.status];
  };

  // TODO move to store
  let guessedLetters: GuessedLetters = {
    correct: [],
    present: [],
    incorrect: [],
    none: []
  };
  $: guessedLetters = guesses.reduce((letters, guess) => {
    guess.letters.forEach((letter) => {
      letters[letter.status] = [...new Set([...letters[letter.status], letter.value])];
    });
    return letters;
  }, guessedLetters);
</script>

<div class="flex flex-col h-full items-center">
  <!-- <pre>{JSON.stringify(currentGuess?.letters.map((letter) => letter.value))}</pre> -->
  <!-- {JSON.stringify(todayLetters)} -->
  <!-- {JSON.stringify(guessedLetters)} -->
  <Header />

  <section class="my-auto p-2 grid grid-cols-5 gap-1.5 w-full max-w-[350px] h-full max-h-[420px]">
    {#each guesses as guess}
      {#each guess.letters as letter}
        <div
          class="flex justify-center items-center text-4xl aspect-square {getLetterClasses(letter)}"
        >
          {letter.value}
        </div>
      {/each}
    {/each}
  </section>

  <Keyboard {guessedLetters} on:add={handleAdd} on:remove={handleRemove} on:enter={handleEnter} />
</div>
