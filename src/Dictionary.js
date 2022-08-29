import React, { useState } from "react";
import "./App.css";

export default function Dictionary() {
  let [Keyword, setKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(Keyword);
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
