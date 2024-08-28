import React from "react";
import Banner from "../Banner/Banner";

function Lose({ answer }) {
  return (
    <div>
      <Banner styles="sad">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </Banner>
    </div>
  );
}

export default Lose;
