const { day1, convertedData } = require("./day1");

describe("day1", () => {
  it("should return 7", () => {
    const fakeData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(day1(fakeData)).toBe(7);
  });

  it("should return an array of numbers", () => {
    const inputData = `159
        158
        174
        196
        197
        194
        209
        213
        214
        222`;
    const expected = [159, 158, 174, 196, 197, 194, 209, 213, 214, 222];
    expect(convertedData(inputData)).toEqual(expected);
  });
});
