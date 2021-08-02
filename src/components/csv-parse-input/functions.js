import { post } from "axios";
import { parse } from "papaparse";

const postContent = (parsedData) => {
  post(process.env.REACT_APP_URL, { data: parsedData }).then((res) => {
    console.log(res);
  });
};

export const processFiles = (transferedFiles) => {
  // convert from filelist to array
  Array.from(transferedFiles)
    .filter(
      (file) => file.type === "text/csv" // only adds csv files to the array
    )
    .forEach(async (file) => {
      // loops through each valid csv file
      const text = await file.text(); // csv plain text
      const parsedCsv = parse(text, { header: true });
      postContent(parsedCsv.data);
    });
};
