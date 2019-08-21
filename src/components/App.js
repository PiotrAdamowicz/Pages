import React, { Component } from "react";

import "../styles/App.css";
import data from "../data.js";
import Display from "./Display";
import Button from "./Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotation: this.randomQuotationGenerator,
      randomNumber: this.randomNumberGenerator()
    };
    // this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
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
        break;
      case "Random Paragraph":
        this.setState({ randomNumber: this.randomNumberGenerator() });
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Random Pratchett Generator</h1>
        <nav className="menu">
          {/* //TODO: buttons funcionality */}
          <ul>
            <li>
              <Button label="Prev" click={this.clickHandler} />
            </li>
            <li>
              <Button label="Random Paragraph" click={this.clickHandler} />
            </li>
            <li>Mode</li>
            <li>Book</li>
            <li>Next</li>
          </ul>
        </nav>
        {/* TODO:This could be provided inform of simple props(not function) or just
        simply importet to Displaycomponent since it's uniqe */}
        <Display
          display={this.quotationDisplay}
          randomNumber={this.state.randomNumber}
        />
      </div>
    );
  }
}

export default App;
