const data = require("../data");

const day1 = (numbers) => {
  let increases = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[i + 1]) {
      increases++;
    }
  }
  return increases;
};

const convertedData = (data) => {
  return data.split("\n").map((num) => +num);
};
console.log("increases: ", day1(convertedData(data)));

module.exports = { day1, convertedData };
