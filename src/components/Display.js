import React from "react";

const Display = props => {
  // const number = Math.floor(Math.random() * 10);
  // const { number } = props.randomNumber;
  const { display, randomNumber } = props;
  console.log(randomNumber);

  return (
    <main>
      <p className="text_display">
        <i>{display("quotation", randomNumber)}</i>
      </p>
      <p>
        <strong>
          {display("author", randomNumber)} -{" "}
          <i>{display("book", randomNumber)}</i>
        </strong>
      </p>
    </main>
  );
};

export default Display;
