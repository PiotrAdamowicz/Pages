import React, { Component } from "react";

import "../styles/App.css";
import data from "../data.js";
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quotation: this.randomQuotationGenerator };
  }

  //For now only 0-9 will need refactor for up to 999
  randomQuotationGenerator(innerData, number) {
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

  render() {
    console.log(data);
    return (
      <div className="App">
        <h1>Random Pratchett Generator</h1>
        <nav className="menu">
          <ul>
            <li>Prev</li>
            <li>Random Paragraph</li>
            <li>Mode</li>
            <li>Book</li>
            <li>Next</li>
          </ul>
        </nav>
        <Display display={this.randomQuotationGenerator} />
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <h1>Shazam!!</h1>
//     </div>
//   );
// }

// export default App;
