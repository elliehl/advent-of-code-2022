const fs = require("fs");

let listData = fs.readFileSync("./data.txt", "utf-8", (err, data) => {
  return data;
});

const dayOne = (newData) => {
  let calorieData = newData.split("\n");
  let largestSum = -Infinity;
  let secondLargestSum = -Infinity;
  let thirdLargestSum = -Infinity;
  let sum = 0;

  for (let i = 0; i < calorieData.length; i++) {
    switch (calorieData[i]) {
      case "":
        if (sum > largestSum) {
          thirdLargestSum = secondLargestSum;
          secondLargestSum = largestSum;
          largestSum = sum;
        } else if (sum < largestSum && sum > secondLargestSum) {
          thirdLargestSum = secondLargestSum;
          secondLargestSum = sum;
        } else if (
          sum < largestSum &&
          sum < secondLargestSum &&
          sum > thirdLargestSum
        ) {
          thirdLargestSum = sum;
        }
        sum = 0;
        break;
      default:
        sum += parseInt(calorieData[i]);
    }
  }
  let topThreeTotal = largestSum + secondLargestSum + thirdLargestSum;
  return topThreeTotal;
};

dayOne(listData);

module.exports = dayOne;
