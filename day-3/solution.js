const fs = require("fs");
const lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let inputData = fs.readFileSync("./data.txt", "utf-8", (err, data) => {
  return data;
});

const splitStringInHalf = (string) => {
  return [
    string.substring(0, Math.floor(string.length / 2)),
    string.substring(Math.floor(string.length / 2), string.length),
  ];
};

const sharedLetters = [];

const findSharedLetters = (data) => {
  let itemData = data.split("\n");
  const splitItemArray = itemData.map((string) => splitStringInHalf(string));
  let individualLetters = [];

  for (let i = 0; i < splitItemArray.length; i++) {
    individualLetters.push(splitItemArray[i][0].split(""));
    for (let j = 0; j < individualLetters[0].length; j++) {
      if (splitItemArray[i][1].includes(individualLetters[0][j])) {
        sharedLetters.push(individualLetters[0][j]);
        individualLetters = [];
        break;
      }
    }
  }
  return sharedLetters;
};

const calculatePrioritySum = () => {
  let prioritySum = 0;

  for (let i = 0; i < sharedLetters.length; i++) {
    prioritySum += lettersArray.indexOf(sharedLetters[i]) + 1;
  }
  return prioritySum;
};

calculatePrioritySum(findSharedLetters(inputData));

module.exports = { findSharedLetters, calculatePrioritySum };
