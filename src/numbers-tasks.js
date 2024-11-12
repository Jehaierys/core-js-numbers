/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates           *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math     *
 *                                                                                           *
 ******************************************************************************************* */

function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(raduis) {
  return 2 * Math.PI * raduis;
}

function getAverage(value1, value2) {
  return value1 / 2 + value2 / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function getLinearEquationRoot(a, b) {
  return (-1 * b) / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  return Math.acos(
    ((x1 * x2 + y1 * y2) / Math.sqrt(x1 ** 2 + y1 ** 2)) *
      Math.sqrt(x2 ** 2 + y2 ** 2)
  );
}

function getLastDigit(value) {
  const string = value.toString().trim();
  return parseFloat(string[string.length - 1]);
}

function parseNumberFromString(string) {
  return parseFloat(string);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(a ** 2 + b ** 2 + c ** 2);
}

function roundToPowerOfTen(num, pow) {
  let a = parseFloat(num / 10 ** pow, 10);
  a = Math.round(a);
  return a * 10 ** pow;
}

function isPrime(n) {
  const primes = [2, 3, 5, 7, 11, 13, 17, 19];
  for (let i = 0; i < primes.length - 1; ) {
    if (primes[i] === n) {
      return true;
    }
    if (n % primes[i] === 0) {
      return false;
    }
    i += 1;
  }
  return true;
}

function toNumber(value, def) {
  if (!Number.isNaN(parseFloat(value))) {
    return value;
  }
  return def;
}

function getCube(num) {
  return num ** 3;
}

/**
 * Returns the Fibonacci number located at the index position.
 *
 * @param {number} index
 * @return {number}
 *
 * @example:
 *   0  => 0
 *   1  => 1
 *   2  => 1
 *   3  => 2
 *   10 => 55
 */
function getFibonacciNumber(index) {
  let counter = index;
  let previousNumber = 1;
  let currentNumber = 1;
  let keeper = 1;

  if (counter === 1) {
    return 0;
  }
  if (counter === 2 || counter === 3) {
    return 1;
  }

  counter -= 3;

  while (counter !== 0) {
    keeper = currentNumber;
    currentNumber += previousNumber;
    previousNumber = keeper;
    counter -= 1;
  }
  return currentNumber;
}

function getSumToN(n) {
  return n ** 2 / 2 + n * 0.5;
}

function getSumOfDigits(num) {
  const string = num.toString().trim();
  let i = 0;
  let sum = 0;
  while (i < string.length) {
    sum += parseInt(string.charAt(i), 10);
    i += 1;
  }
  return sum;
}

function isPowerOfTwo(num) {
  let i = 1;
  while (i < 20) {
    if (num % 2 ** i === 0) {
      if (num === 0) {
        return true;
      }
      if (num !== Math.floor(num)) {
        return false;
      }
      i += 1;
    }
  }
  return false;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

/**
 * Returns a string representation of a number in exponential notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '1.23e+4'
 */
function toExponential(/* number, fractionDigits */) {
  throw new Error('Not implemented');
}

/**
 * Returns a string representation of a number in fixed-point notation.
 *
 * @param {number} number
 * @param {number} fractionDigits
 * @return {string}
 *
 * @example:
 * 12345, 2    => '12345.00'
 * 12.345, 1   => '12.3'
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits).toString();
}

/**
 * Returns a string representation of a number in normal (fixed-point or exponential)
 * notation rounded to precision significant digits.
 *
 * @param {number} number
 * @param {number} precision
 * @return {string}
 *
 * @example:
 * 12345, 7    => '12345.00'
 * 12.345, 4   => '12.35'
 */
function toPrecision(/* number, precision */) {
  throw new Error('Not implemented');
}

/**
 * Returns the primitive value of a Number object.
 *
 * @param {Number} number
 * @return {number}
 *
 * @example:
 * new Number(5) => 5
 * Number(-5)    => -5
 */
function getNumberValue(/* number */) {
  throw new Error('Not implemented');
}

function isNumber(number) {
  return number === parseFloat(number);
}

function isInteger(number) {
  return number === parseInt(number, 10);
}

/**
 * Returns a floating point number or, if the number cannot be parsed from the argument, returns NaN.
 *
 * @param {string} str
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh' => 4.567
 * 'abcdefgh'      => NaN
 */
function getFloatOnString(/* str */) {
  throw new Error('Not implemented');
}

/**
 * Returns an integer of the specified base or, if the number cannot be parsed
 * from the argument, returns NaN.
 *
 * @param {string} str
 * @param {number} base
 * @return {number | NaN}
 *
 * @example:
 * '4.567abcdefgh', 10  => 4
 * 'abcdefgh', 10       => NaN
 * '1.234', 2           => 1
 * '10', 8              => 8
 */
function getIntegerOnString(/* str, base */) {
  throw new Error('Not implemented');
}

/**
 * Returns whether a number is a safe integer.
 *
 * @param {number} number
 * @return {boolean}
 *
 * @example:
 * 10       => true
 * 3.5      => false
 * 2 ** 53  => false
 */
function isSafeInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the smallest integer less than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.9  => 5
 * -5.1 => -6
 */
function roundToSmallestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest integer greater than or equal to a given number.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.1  => 6
 * -5.9 => -5
 */
function roundToLargestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 6
 * 5.4  => 5
 * -5.5 => -5
 */
function roundToNearestInteger(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the integer part of a number by removing any fractional digits.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 5.5  => 5
 * 5.4  => 5
 * -5.5 => -5
 */
function getIntegerPartNumber(/* number */) {
  throw new Error('Not implemented');
}

/**
 * Returns the sum of numbers.
 *
 * @param {number} x1
 * @param {number} x2
 * @param {number} x3
 * @returns {number}
 *
 * @example:
 * 1, 2, 3       => 6
 * 0.1, 0.2, 0.3 => 0.6
 */
function getSumOfNumbers(/* x1, x2, x3 */) {
  throw new Error('Not implemented');
}

/**
 * Returns the largest number.
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 *
 * @example:
 * 1, 2   => 2
 * -5, -6 => -5
 * 0, 5   => 5
 */
function getMaxNumber(/* firstNumber, secondNumber */) {
  throw new Error('Not implemented');
}

/**
 * Returns a random integer in the range from min to max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 *
 * @example:
 * 1, 2  => 1 | 2
 * -5, 0 => -5 | -4 | -3 | -2 | -1 | 0
 * -1, 1 => -1 | 0 | 1
 */
function getRandomInteger(/* min, max */) {
  throw new Error('Not implemented');
}

/**
 * Returns the length of the hypotenuse of a right triangle.
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 *
 * @example:
 * 3, 4 => 5
 */
function getHypotenuse(/* a, b */) {
  throw new Error('Not implemented');
}

/**
 * Returns count of odd numbers from zero to the resulting number.
 * The resulting number is taken into account.
 *
 * @param {number} number
 * @return {number}
 *
 * @example:
 * 4  => 2
 * 5  => 3
 * 10 => 5
 * 15 => 8
 */
function getCountOfOddNumbers(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  getRectangleArea,
  getCircleCircumference,
  getAverage,
  getDistanceBetweenPoints,
  getLinearEquationRoot,
  getAngleBetweenVectors,
  getLastDigit,
  parseNumberFromString,
  getParallelepipedDiagonal,
  roundToPowerOfTen,
  isPrime,
  toNumber,
  getCube,
  getFibonacciNumber,
  getSumToN,
  getSumOfDigits,
  isPowerOfTwo,
  getSine,
  numberToStringInBase,
  isSafeInteger,
  roundToLargestInteger,
  roundToSmallestInteger,
  roundToNearestInteger,
  getSumOfNumbers,
  isNumber,
  isInteger,
  toExponential,
  toFixed,
  toPrecision,
  getNumberValue,
  getFloatOnString,
  getIntegerOnString,
  getIntegerPartNumber,
  getMaxNumber,
  getRandomInteger,
  getHypotenuse,
  getCountOfOddNumbers,
};
