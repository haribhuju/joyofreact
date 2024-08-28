import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuessess] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  function handleGuesses(guessInput) {
    const nextGuessInput = [...guesses, guessInput];
    setGuessess(nextGuessInput);
    if (guessInput === answer) {
      setGameStatus("win");
    } else if (nextGuessInput.length >= 6) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput
        handleGuesses={handleGuesses}
        gameStatus={gameStatus}
        answer={answer}
        guesses={guesses}
      />
    </>
  );
}

export default Game;
