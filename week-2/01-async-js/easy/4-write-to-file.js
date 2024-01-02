const fs = require("fs");
const filePath = "01-async-js/sahil.txt";
const content = "Music can help increase focus and attention in work";

function writeFile() {
  fs.writeFile(filePath, content, "utf-8", (err, data) => {
    if (err) {
      console.log("Error in writing into the file", err);
      return;
    }

    console.log("Write operation Successful");
  });
}

writeFile();
