const { day1Part2, formatData } = require("./day1Part2");

describe("day1 part2", () => {
  it("should return 5", () => {
    const fakeData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(day1Part2(fakeData)).toBe(5);
  });

  it("should return an array of numbers", () => {
    const inputData = `199
        200
        208
        210
        200
        207
        240
        269
        260
        263`;
    const expected = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(formatData(inputData)).toEqual(expected);
  });
});
