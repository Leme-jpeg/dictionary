import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results.js";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);

    console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="top">
        <form onSubmit={Search}>
          <input
            type="search"
            placeholder="Search..."
            autoFocus={true}
            onChange={handleKeyword}
          />
          <input type="submit" value="search" />
        </form>
        <hr />
      </div>

      <Results results={results} />
    </div>
  );
}
