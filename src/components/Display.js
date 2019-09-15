import React from "react";
import styled from "styled-components";

const Display = props => {
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

const DisplaStyled = styled(Display)`
  font-size: 100px;
`;

export default DisplaStyled;
