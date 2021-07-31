import React from "react";
import { parse } from "papaparse";

import "./csv-parse-input.styles.scss";

const processFiles = (transferedFiles) => {
  // convert from filelist to array
  Array.from(transferedFiles)
    .filter(
      (file) => file.type === "text/csv" // only adds csv files to the array
    )
    .forEach(async (file) => {
      // loops through each valid csv file
      const text = await file.text(); // csv plain text
      const parsedCsv = parse(text, { header: true });
      console.log(parsedCsv.data);
    });
};

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
