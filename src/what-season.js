import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  // if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error("Invalid date!");
  if (isNaN(Date.parse(date))) throw new Error("Invalid date!");
  try {
    date.getTime();
  } catch (error) {
    throw new Error ('Invalid date!');
  }

  let season;
  try {
    switch (date.getMonth()) {
      case 0:
        season = 'winter';
        break;
      case 1:
        season = 'winter';
        break;
      case 2:
        season = 'spring';``
        break;
      case 3:
        season = 'spring';
        break;
      case 4:
        season = 'spring';
        break;
      case 5:
        season = 'summer';
        break;
      case 6:
        season = 'summer';
        break;
      case 7:
        season = 'summer';
        break;
      case 8:
        season = 'autumn';
        break;
      case 9:
        season = 'autumn';
        break;
      case 10:
        season = 'autumn';
        break;
      case 11:
        season = 'winter';
        break;
    }
  } catch (error) {
      throw new Error ('Invalid date!');
    }
return season;
}
