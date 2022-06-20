const ftoc = function(degF) {
  const degC = (degF - 32) * (5/9);
  return +degC.toFixed(1);
};

const ctof = function(degC) {
  const degF = degC * (9/5) + 32;
  return +degF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
