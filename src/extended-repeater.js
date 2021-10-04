import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let contains = new Array(5); // [ [repeatTimes], [separator], [addition], [additionRepeatTimes], [additionSeparator] ]

  for (let key in options) {
    if ( key == 'repeatTimes' ) contains[0] = options[key];
    if ( key == 'separator' ) contains[1] = options[key];
    if ( key == 'addition' ) contains[2] = options[key] + '';
    if ( key == 'additionRepeatTimes' ) contains[3] = options[key];
    if ( key == 'additionSeparator' ) contains[4] = options[key];
  }

  //------ addAddSep = additionRepeatTimes * (addition + additionSeparator) - last additionSeparator -------

  let addAddSep = [''];

  if (contains[3] == undefined) contains[3] = 1;

  for (let k = 1; k <= contains[3]; k++) {
    addAddSep.push(contains[2]);
    if (contains[4] !== undefined) addAddSep.push(contains[4]);
    else addAddSep.push('|');
  }

  if (addAddSep.length >= 2) addAddSep.pop();

  //----------------------------------------------------------------------------

  //------------ str1 = str + addAddSep + separator ----------------------------

  let str1 = [str + ''] ; // make str -> String
  Array.prototype.push.apply(str1, addAddSep);

  if  (contains[1] !== undefined) str1.push(contains[1]);
      else str1.push('+');

  //-----------------------------------------------------------------------------

  //----------------resultArr = repeatTimes * str1 - last separator--------------

  let resultArr = [];

  if (contains[0] == undefined) contains[0] = 1;

  for (let i = 1; i <= contains[0]; i++) {
    Array.prototype.push.apply(resultArr, str1);
  }
  resultArr.pop();

  //------------------------------------------------------------------------------
  //--------- resultArr -> String ----------

  return resultArr.join('');
}
