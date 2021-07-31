import React from "react";

import "./csv-parse-input.styles.scss";

const CsvParseInput = () => {
  return (
    <div>
      <div
        className="input-box"
        onDragOver={(e) => {
          e.preventDefault(); // prevents files form being downloaded when dragged in the browser (needs to be done on onDrop too for it to work)
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <span>Drop CSV Here</span>
      </div>
    </div>
  );
};

export default CsvParseInput;
