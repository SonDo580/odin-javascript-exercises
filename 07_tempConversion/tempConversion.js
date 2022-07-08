const ftoc = function(fdegree) {
  return roundToOneDecimal(5 * (fdegree - 32) / 9);
};

const ctof = function(cdegree) {
  return roundToOneDecimal(32 + 9 * cdegree / 5);
};

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
