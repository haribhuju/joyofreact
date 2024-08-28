import React from "react";
import Banner from "../Banner/Banner";

function Win({ guesses }) {
  return (
    <div>
      <Banner styles="happy">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {" "}
            {guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`}
          </strong>
          .
        </p>
      </Banner>
    </div>
  );
}

export default Win;
