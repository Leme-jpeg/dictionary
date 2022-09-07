import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="container">
      <header>The Dictionary</header>
      <main>
        <Dictionary defaultKeyword="Dictionary" />
      </main>
      <footer>
        {" "}
        <a
          href="https://github.com/Leme-jpeg/dictionary"
          target="_blank"
          rel="noopener noreferrer"
        >
          coded by S. Desjardins
        </a>
      </footer>
    </div>
  );
}

export default App;
