import React, { Component } from "react";
import data from "../utils/data.js";
import { dataLenght } from "../utils/data";
import DisplayStyled from "./Display";
import Button from "./Button";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  padding: 0 ;
  margin: 0;
  
}
*, *::before, *::after{
  box-sizing: border-box;
}
`;
const Div = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
// TODO: why can't I center h1?
const H1 = styled.h1`
  padding-left: auto;
`;
const ButtonStyled = styled(Button)`
  border: none;
  text-decoration: none;
  border-radius: 50%;
`;
const Ul = styled.ul`
  display: flex;
  /* justify-content: center; */
  list-style: none;
  flex-wrap: wrap;
  width: 360px;
  height: 140px;
  padding-inline-start: 0;
`;
const Li = styled.li`
  width: 100%;
  button {
    width: 100%;
    flex-grow: 1;
    height: 100%;
    font-size: 20px;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuotation: this.randomNumberGenerator()
    };
  }

  randomNumberGenerator() {
    const number = Math.floor(Math.random() * 10);
    return number;
  }

  //For now only 0-9 will need to refactor for up to 999
  quotationDisplay(innerData, number) {
    const { quotation, author, book, personal } = data[`quotation-00${number}`];

    switch (innerData) {
      case "quotation":
        const randomQuatation = quotation;
        return randomQuatation;
      case "author":
        return author;
      case "book":
        return book;
      case "personal":
        return personal;
      default:
        return null;
    }
  }

  clickHandler = label => {
    switch (label) {
      case "Prev":
        console.log("works Prev");
        this.setState({
          activeQuotation: this.state.activeQuotation - 1
        });
        this.navigationHandler(false);
        break;
      case "Random Paragraph":
        this.setState({ activeQuotation: this.randomNumberGenerator() });
        break;

      case "Books":
        console.log("Mode Books");
        break;
      case "Next":
        console.log("Mode Next");
        this.setState({
          activeQuotation: this.state.activeQuotation + 1
        });
        this.navigationHandler(true);
        break;

      default:
        break;
    }
  };

  navigationHandler(direction) {
    //for positive values handels edge cases for Next button
    console.log(dataLenght);
    if (direction) {
      if (this.state.activeQuotation >= dataLenght - 1) {
        this.setState({ activeQuotation: 0 });
        console.log(dataLenght);
      } //as above just for negativ and Prev
    } else if (!direction) {
      if (this.state.activeQuotation <= 0) {
        this.setState({ activeQuotation: dataLenght - 1 });
        console.log("false works");
      }
    }
  }

  render() {
    return (
      <Div className="App">
        <GlobalStyle />
        <H1>Random Pratchett Generator</H1>
        <nav className="menu">
          <Ul>
            <Li big>
              <ButtonStyled
                big
                label="Random Paragraph"
                click={this.clickHandler}
              />
            </Li>
            <Li>
              <ButtonStyled label="Prev" click={this.clickHandler} />
            </Li>
            <Li>
              <ButtonStyled label="Books" click={this.clickHandler} />
            </Li>
            <Li>
              <ButtonStyled label="Next" click={this.clickHandler} />
            </Li>
          </Ul>
        </nav>
        {/* TODO:This could be provided in form of simple props(not function) or just
        simply imported to Display component since it's uniqe */}
        <DisplayStyled
          display={this.quotationDisplay}
          randomNumber={this.state.activeQuotation}
        />
      </Div>
    );
  }
}

export default App;
