// 1. bind the input
// 2. Requirements of uppercase, minlength and maxlength

import React, { useState } from "react";
import Win from "../Win/Win";
import Lose from "../Lose/Lose";

function GuessInput({ handleGuesses, gameStatus, answer, guesses }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleGuesses(input);
    setInput("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
        disabled={gameStatus !== "running"}
      />
      {gameStatus === "win" && <Win guesses={guesses} />}
      {gameStatus === "lost" && <Lose answer={answer} />}
    </form>
  );
}

export default GuessInput;
