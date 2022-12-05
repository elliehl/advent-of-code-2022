const dayOne = require("./solution");

describe("dayOne", () => {
  it("returns the correct value for the sum of the 3 elves carrying the most calories", () => {
    const testData = "1\n2\n3\n\n10\n20\n30\n\n100\n200\n300\n\n20\n40\n60\n";
    const actual = dayOne(testData);
    expect(actual).toBe(780);
  });
});
