const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	if (numArray.length === 0) return 0;
  let temp = 0;
  for (const num of numArray){
    temp += num;
  }
  return temp;
};

const multiply = function(numArray) {
  if (numArray.length === 0) return 0;
  let temp = 1;
  for (const num of numArray){
    temp *= num;
  }
  return temp;
};

const power = function(num, pwr) {
	return num ** pwr;
};

const factorial = function(num) {
	if (num === 0) return 1;
  else if (num === 1) return 1;
  else if (num === 2) return 2;
  let temp = 1;
  for (let i = 0; i<num; i++){
    temp *= num - i;
  }
  return temp;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
