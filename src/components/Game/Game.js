import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessForm from '../GuessForm';
// import GuessResults from '../GuessResults';
import Guess from '../Guess';
import GameEndingBanner from '../GameEndingBanner/GameEndingBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({ status: 'active', guessCount: 0 });

  function submitGuess(guess) {
    const updatedGuesses = [...guesses, guess];
    setGuesses(updatedGuesses);

    if (guess === answer) {
      setGameStatus({ status: 'won', guessCount: updatedGuesses.length });
    }
    if (updatedGuesses.length == 6 && guess !== answer) {
      setGameStatus({ status: 'lost', guessCount: updatedGuesses.length });
    }
  }

  return (
    <>
      <GameEndingBanner gameStatus={gameStatus} answer={answer} />

      <Guess guesses={guesses} answer={answer} />
      {/* <GuessResults guesses={guesses} /> */}
      <GuessForm submitGuess={submitGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
