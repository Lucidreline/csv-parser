import "./App.css";

import CsvParseInput from "./components/csv-parse-input/csv-parse-input.component";

function App() {
  return (
    <div className="App">
      <CsvParseInput boxText="Drop CSV Here" />
    </div>
  );
}

export default App;
