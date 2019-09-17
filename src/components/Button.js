import React from "react";
import styled from "styled-components";

const Button = props => {
  return (
    <button onClick={props.click.bind(this, props.label)}>{props.label}</button>
  );
};

export default Button;
