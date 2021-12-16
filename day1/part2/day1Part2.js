const inputData = require("../data");

const day1Part2 = (data) => {
  let increases = 0;
  const newNums = [];
  for (let i = 0; i < data.length - 2; i++) {
    newNums.push(data[i] + data[i + 1] + data[i + 2]);
  }
  for (let i = 0; i < newNums.length; i++) {
    if (newNums[i] < newNums[i + 1]) {
      increases++;
    }
  }
  return increases;
};

const formatData = (data) => {
  return data.split("\n").map((num) => +num);
};

console.log(day1Part2(formatData(inputData)));

module.exports = { day1Part2, formatData };
