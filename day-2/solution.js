const fs = require("fs");

let strategyData = fs.readFileSync("./data.txt", "utf-8", (err, data) => {
  return data;
});

const calculateTotalScore = (data) => {
  let gameData = data.split("\n");
  let totalScore = 0;

  for (let i = 0; i < gameData.length; i++) {
    switch (gameData[i]) {
      case "A X":
        totalScore += 4;
        break;
      case "A Y":
        totalScore += 8;
        break;
      case "A Z":
        totalScore += 3;
        break;
      case "B X":
        totalScore += 1;
        break;
      case "B Y":
        totalScore += 5;
        break;
      case "B Z":
        totalScore += 9;
        break;
      case "C X":
        totalScore += 7;
        break;
      case "C Y":
        totalScore += 2;
        break;
      case "C Z":
        totalScore += 6;
    }
  }
  return totalScore;
};

calculateTotalScore(strategyData);

module.exports = calculateTotalScore;
