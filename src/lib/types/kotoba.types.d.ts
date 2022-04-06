export type Letter =
    | ''
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';
  export type LetterStatus = 'none' | 'incorrect' | 'present' | 'correct';
  export type LetterGuess = {
    status: LetterStatus,
    value: Letter
  };
  export type Guess = {
    letters: LetterGuess[];
    status: 'incomplete' | 'complete';
  };

  export type GuessedLetters  = {
    [key in LetterStatus]: Letter[];
  };
