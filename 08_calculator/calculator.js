const add = function(...paras) {
	let sum = 0;
  for (let num of paras) {
    sum += num;
  }
  return sum;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (let num of array) {
    product *= num;
  }
  return product;
};

const power = function(base, power) {
	let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
  let i = n;
  while (i > 0) {
    result *= i;
    i--;
  }
  return result;
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
