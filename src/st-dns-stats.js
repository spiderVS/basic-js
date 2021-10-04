import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  if (domains === []) return {};

  let obj = {};
  let arr = [];

  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse().join('.'); //info.epam.com -> com.epam.info
  }

  console.log(domains);

  let currentPos = 0;
  for (let j = 0; j < domains.length; j++) {

    while (domains[j].indexOf('.', currentPos) !== -1) {

      let posledniy_index_vyrezki = domains[j].indexOf('.', currentPos);
      console.log('posledniy_index_vyrezki', posledniy_index_vyrezki);

      let vyrezka = domains[j].slice(0, posledniy_index_vyrezki);
      console.log('vyrezka', vyrezka);

      arr.push(vyrezka);

      currentPos = currentPos + arr[arr.length-1].length + 1;
    }
     arr.push(domains[j].slice(0));
     currentPos = 0;

  }

  console.log(domains);
  console.log(arr);

  let b = [...new Set(arr)];
  console.log(b);

  for (let m = 0; m < b.length; m++) {
    console.log(arr.filter(el => el === b[m]).length);
    obj[`.${b[m]}`] = arr.filter(el => el === b[m]).length;
  }

  console.log(obj);
  return obj;
}
