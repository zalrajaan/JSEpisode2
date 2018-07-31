/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  array.forEach(function(item) {
    console.log(item);
  });
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  let convert = [];
  convert = temperatures.map(temperature => (temperature - 32) * (5 / 9));
  return convert;
};

/**************************************
 * hottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshold temperature
 * - Returns an array of temperatures
 *   that exceed the threshold
 ***************************************/
const hottestDays = function(temperatures, threshold) {
  let temp = [];
  temp = temperatures.filter(function(temperature) {
    return temperature > threshold;
  });
  return temp;
};

/******************************************
 * logHottestDays(temperatures, threshold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshold) {
  let anything = [];
  anything = hottestDays(temperatures, threshold);
  anything = toCelsius(anything);
  logger(anything);
};

export { logger, toCelsius, hottestDays, logHottestDays };
