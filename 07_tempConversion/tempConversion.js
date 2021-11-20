const ftoc = function(num) {
  //[°C] = ([°F] − 32) × 5⁄9
  let celcius = Math.round(((num - 32) * 5/9)* 10) / 10;
  return celcius;

};

const ctof = function(num) {
// [°F] = [°C] × 9⁄5 + 32
  let farenheit = Math.round((num * 9/5 +32) * 10) / 10;
  return farenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
