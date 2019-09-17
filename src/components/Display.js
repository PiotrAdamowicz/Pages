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

//TODO: how de heeefff do I mix react component with Styled component while importing it
const DisplayStyled = styled(Display)`
  main {
    p {
      padding-left: 20px;
    }
  }
`;

export default DisplayStyled;
