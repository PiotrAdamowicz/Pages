import React, { Component } from "react";

import "../styles/App.css";
import data from "../data.js";
import { dataLenght } from "../data";
import DisplayStyled from "./Display";
import Button from "./Button";
import styled from "styled-components";

const ButtonStyled = styled(Button)`
  width: ${props => (props.big ? "100%" : "30%")};
`;
const Li = styled.li`
  flex-grow: ${props => (props.big ? 3 : 1)};
  width: 100%;
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

  //TODO: edge case for max inedx of data object
  navigationHandler(direction) {
    //for positive values handels edge cases for Next button
    console.log(dataLenght);
    if (direction) {
      if (this.state.activeQuotation >= dataLenght - 1) {
        this.setState({ activeQuotation: 0 });
        console.log(dataLenght);
      }
    } else if (!direction) {
      if (this.state.activeQuotation <= 0) {
        this.setState({ activeQuotation: dataLenght - 1 });
        console.log("false works");
      }
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Random Pratchett Generator</h1>
        <nav className="menu">
          {/* //TODO: buttons funcionality */}
          <ul>
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
          </ul>
        </nav>
        {/* TODO:This could be provided in form of simple props(not function) or just
        simply imported to Display component since it's uniqe */}
        <DisplayStyled
          display={this.quotationDisplay}
          randomNumber={this.state.activeQuotation}
        />
      </div>
    );
  }
}

export default App;
