import React from "react";

const Display = props => {
  const number = Math.floor(Math.random() * 10);
  return (
    <main>
      <p className="text_display">
        <i>{props.display("quotation", number)}</i>
      </p>
      <p>
        <strong>
          {props.display("author", number)} -{" "}
          <i>{props.display("book", number)}</i>
        </strong>
      </p>
    </main>
  );
};

export default Display;
