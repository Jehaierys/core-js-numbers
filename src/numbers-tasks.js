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
  return value % 10;
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

function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= index; ) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    i += 1;
  }

  return curr;
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
  if (num === 2) return true;
  if (!Number.isInteger(num)) return false;
  return isPowerOfTwo(num / 2);
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits).toString();
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  if (Number(number) === number) {
    if (Number.isFinite(number)) {
      return true;
    }
  }
  return false;
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return Number.parseFloat(str);
}

function getIntegerOnString(str, base) {
  return Number.parseInt(str, base);
}

function isSafeInteger(number) {
  return Number.isSafeInteger(number);
}

function roundToSmallestInteger(number) {
  return Math.floor(number);
}

function roundToLargestInteger(number) {
  return Math.ceil(number);
}

function roundToNearestInteger(number) {
  return Math.round(number);
}

function getIntegerPartNumber(number) {
  return Math.trunc(number);
}

function getSumOfNumbers(x1, x2, x3) {
  return (x1 + x2 + x3).toFixed(3);
}

function getMaxNumber(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

function getRandomInteger(min, max) {
  return Math.trunc(Math.random() * (max - min) + min + 1);
}

function getHypotenuse(a, b) {
  return Math.hypot(a, b);
}

function getCountOfOddNumbers(number) {
  if (number % 2 === 0) {
    return Math.abs(number / 2);
  }
  return (Math.abs(number) + 1) / 2;
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
