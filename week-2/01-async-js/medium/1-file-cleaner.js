const fs = require("fs");

const path = "01-async-js/sahil.txt";

fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.log("Error in reading the file :", err);
    return;
  }

  let alteredData = data.replace(/\s+/g, " ");

  fs.writeFile(path, alteredData.trim(), "utf-8", (err) => {
    if (err) {
      console.log("Error in writing the file :", err);
      return;
    }

    console.log("Write operation complete");
  });
});
