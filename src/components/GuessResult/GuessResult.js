import React from "react";

function GuessResult({ guesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
