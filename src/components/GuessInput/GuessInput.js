// 1. bind the input
// 2. Requirements of uppercase, minlength and maxlength

import React, { useState } from "react";

function GuessInput() {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setInput("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        minLength={5}
        id="guess-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
