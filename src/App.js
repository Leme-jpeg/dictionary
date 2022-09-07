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
      <footer>coded by S. Desjardins</footer>
    </div>
  );
}

export default App;
