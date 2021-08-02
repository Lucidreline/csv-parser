import React from "react";
import { processFiles } from "./functions";

import "./csv-parse-input.styles.scss";

const CsvParseInput = () => {
  const [highlighted, setHighlighted] = React.useState(false);

  return (
    <div>
      <div
        className={`csv-drop ${highlighted ? "highlight" : ""}`}
        onDragEnter={() => setHighlighted(true)}
        onDragLeave={() => setHighlighted(false)}
        onDragOver={(e) => {
          e.preventDefault(); // prevents files form being downloaded when dragged in the browser (needs to be done on onDrop too for it to work)
        }}
        onDrop={(e) => {
          e.preventDefault();
          processFiles(e.dataTransfer.files);
          setHighlighted(false);
        }}
      >
        <span className="csv-drop-text">Drop CSV Here</span>
      </div>
    </div>
  );
};

export default CsvParseInput;
