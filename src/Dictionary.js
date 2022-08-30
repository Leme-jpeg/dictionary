import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function Search(event) {
    event.preventDefault();
    alert(Keyword);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={Search}>
        <input
          type="search"
          placeholder="Search..."
          autoFocus={true}
          onChange={handleKeyword}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
