const fs = require("fs");
let inputData = fs.readFileSync("./data.txt", "utf-8", (err, data) => {
  return data;
});
const crateStacks = [];
const addEmptyStacks = () => {
  for (let i = 0; i < 9; i++) {
    crateStacks.push([]);
  }
};

const addCratesToStacks = (data) => {
  let splitArray = data.split("\n");
  for (let i = 0; i < 8; i++) {
    if (splitArray[i].charAt(1) !== " ") {
      crateStacks[0].push(splitArray[i].charAt(1));
    }
    if (splitArray[i].charAt(5) !== " ") {
      crateStacks[1].push(splitArray[i].charAt(5));
    }
    if (splitArray[i].charAt(9) !== " ") {
      crateStacks[2].push(splitArray[i].charAt(9));
    }
    if (splitArray[i].charAt(13) !== " ") {
      crateStacks[3].push(splitArray[i].charAt(13));
    }
    if (splitArray[i].charAt(17) !== " ") {
      crateStacks[4].push(splitArray[i].charAt(17));
    }
    if (splitArray[i].charAt(21) !== " ") {
      crateStacks[5].push(splitArray[i].charAt(21));
    }
    if (splitArray[i].charAt(25) !== " ") {
      crateStacks[6].push(splitArray[i].charAt(25));
    }
    if (splitArray[i].charAt(29) !== " ") {
      crateStacks[7].push(splitArray[i].charAt(29));
    }
    if (splitArray[i].charAt(33) !== " ") {
      crateStacks[8].push(splitArray[i].charAt(33));
    }
  }
  return splitArray;
};

const moveCrates = (data) => {
  let splitArray = data.split("\n");
  const movingData = [];
  for (let i = 10; i < splitArray.length; i++) {
    movingData.push(splitArray[i].split(" "));
  }
  for (let j = 0; j < movingData.length; j++) {
    for (let k = 0; k < parseInt(movingData[j][1]); k++) {
      let movedCrate = crateStacks[parseInt(movingData[j][3] - 1)].shift();
      crateStacks[parseInt(movingData[j][5] - 1)].unshift(movedCrate);
    }
  }
  return crateStacks;
};

addEmptyStacks();
addCratesToStacks(inputData);
moveCrates(inputData);
