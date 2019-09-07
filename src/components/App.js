import React, { Component } from "react";

import "../styles/App.css";
import data from "../data.js";
import Display from "./Display";
import Button from "./Button";

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
        break;
      case "Random Paragraph":
        this.setState({ activeQuotation: this.randomNumberGenerator() });

        console.log(this.state.activeQuotation);
        break;
      case "Mode":
        console.log("Mode Works");
        break;
      case "Books":
        console.log("Mode Books");
        break;
      case "Next":
        console.log("Mode Next");
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
            <li>
              <Button label="Mode" click={this.clickHandler} />
            </li>
            <li>
              <Button label="Books" click={this.clickHandler} />
            </li>
            <li>
              <Button label="Next" click={this.clickHandler} />
            </li>
          </ul>
        </nav>
        {/* TODO:This could be provided in form of simple props(not function) or just
        simply imported to Display component since it's uniqe */}
        <Display
          display={this.quotationDisplay}
          randomNumber={this.state.activeQuotation}
        />
      </div>
    );
  }
}

export default App;
