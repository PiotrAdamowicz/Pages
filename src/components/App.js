import React, { Component } from "react";

import "../styles/App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <h1>Will see</h1>
        <nav className="menu">
          <ul>
            <li>Prev</li>
            <li>Random Paragraph</li>
            <li>Mode</li>
            <li>Book</li>
            <li>Next</li>
          </ul>
        </nav>
        <main>
          <h2>Book Title - author</h2>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat vel
            temporibus quasi est ipsam dolores explicabo, cum nobis magnam.
            Iste, culpa impedit nisi similique eius aliquid dignissimos nesciunt
            molestias voluptates?
          </p>
        </main>
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
