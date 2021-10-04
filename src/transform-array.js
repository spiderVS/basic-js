import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (Object.prototype.toString.call(arr) != "[object Array]") throw new Error("'arr' parameter must be an instance of the Array!");
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] == '--discard-next') && (i !== arr.length-1)) {
      resArr.push('---');
      i += 1;
    } else if ((arr[i] == '--discard-prev') && (i !== 0)) {
        resArr.pop();
        resArr.push('---');
      } else if ((arr[i] == '--double-next') && (i !== arr.length-1)) {
          resArr.push(arr[i+1], arr[i+1]);
          i += 1;
        } else if ((arr[i] == '--double-prev') && (i !== 0)) {
            resArr.push(resArr[resArr.length-1]);
          } else resArr.push(arr[i]);
  }
   resArr = resArr.filter((n) => n != '---');
   resArr = resArr.filter((n) => n != '--discard-next');
   resArr = resArr.filter((n) => n != '--discard-prev');
   resArr = resArr.filter((n) => n != '--double-next');
   resArr = resArr.filter((n) => n != '--double-prev');

   return  resArr;
}
