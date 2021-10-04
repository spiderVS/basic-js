import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const nStr = `${n}`;

  const nArr = nStr.split('');
  let xArr = nStr.split('');
  const kArr = [];

  for (let i = 0; i < nArr.length; i++) {
    xArr[i] = '';
    kArr[i] = +xArr.join('');
    xArr = nStr.split('');
  }
  return kArr.sort((a, b) => b - a)[0];
}
