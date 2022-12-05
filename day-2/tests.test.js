const { calculateTotalScore, calculateCorrectScore } = require("./solution");

describe("calculateTotalScore", () => {
  it("returns the correct value for the total score from every game", () => {
    const testData =
      "A Y\nB Y\nC X\nA X\nC Z\nB Y\nC Y\nA Z\nB X\nB Z\nC X\nA X";
    const actual = calculateTotalScore(testData);
    expect(actual).toBe(61);
  });
});

describe("calculateCorrectScore", () => {
  it("returns the correct value for the total score from every game", () => {
    const testData = "A Y\nB Y\nC X\nA X\nC Z\nB Y\nC Y\nA Z\nB X";
    const actual = calculateCorrectScore(testData);
    expect(actual).toBe(41);
  });
});
