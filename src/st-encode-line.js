import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {

  let n = 1;
  let outStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) n++;
    else {
      outStr += `${ n === 1 ? '' : n }${str[i]}`;
      console.log(outStr);
      n = 1;
    }
  }
  return outStr;
}
