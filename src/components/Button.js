import React from "react";

const Button = props => {
  return (
    <button onClick={props.click.bind(this, props.label)}>{props.label}</button>
  );
};

export default Button;
