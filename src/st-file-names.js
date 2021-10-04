import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let n;
  const names1 = names;
  for (let i = 0; i < names1.length; i++) {
    n = 0;
    const elem = names1[i];
    for (let j = 0; j < names1.length; j++) {
      if (elem === names1[j]) {
        if (n === 0) {
          n++;
        } else {
          names1[j] += `(${n})`;
          n++;
        }
      }
    }
  }
  return names1;
}
