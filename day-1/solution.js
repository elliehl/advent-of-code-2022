const fs = require("fs");

fs.readFile("./data.txt", "utf-8", (err, data) => {
  let calorieData = data.split("\n");
  let largestSum = -Infinity;
  let sum = 0;

  for (let i = 0; i < calorieData.length; i++) {
    switch (calorieData[i]) {
      case "":
        if (sum > largestSum) {
          largestSum = sum;
        }
        sum = 0;
        break;
      default:
        sum += parseInt(calorieData[i]);
    }
  }
  return largestSum;
});
