const fs = require("fs");

const file = "01-async-js/sahil.txt";

function readFileOp() {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.log("Error reading the file : ", err);
      return;
    }

    console.log("Data in the file : \n", data);

    expensiveOp();
  });
}

function expensiveOp() {
  for (let i = 0; i < 100000000; i++) {
    // expensive op
  }

  console.log("Expensive operation complete");
}

readFileOp();
