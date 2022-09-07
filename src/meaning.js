import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="space">
                <strong> Definition: </strong>
                {definition.definition}
              </div>
              <div className="space">
                <em> {definition.example}</em>
              </div>
              <div className="space">
                <Synonyms synonyms={props.meaning.synonyms} />
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
}
