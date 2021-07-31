import React from "react";

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
          console.log(e.dataTransfer.files);
          // convert from filelist to array
          Array.from(e.dataTransfer.files)
            .filter(
              (file) => file.type === "text/csv" // only adds csv files to the array
            )
            .forEach((file) => {});
          setHighlighted(false);
        }}
      >
        <span className="csv-drop-text">Drop CSV Here</span>
      </div>
    </div>
  );
};

export default CsvParseInput;
