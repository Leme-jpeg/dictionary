import React from "react";

export default function Meaning(props) {
  return (
    <ul>
      <li >
        <h4 className="meaning"> {props.meaning.partOfSpeech}</h4>
        <br />
        <p className="definition"> {props.meaning.definitions[0].definition}</p>
      </li>
    </ul>
  );
}
