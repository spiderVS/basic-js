import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const matrixCol = matrix[0].length;
  const matrixRow = matrix.length;
  let n = 0;

  const resMatrix = Array(...Array(matrixRow)).map(() => Array(...Array(matrixCol)));

  for (let j = 0; j < matrixRow; j++) {
    for (let i = 0; i < matrixCol; i++) {
      if (matrix[j][i - 1]) n++;
      if (matrix[j][i + 1]) n++;

      if ((i - 1 >= 0) && (j - 1 >= 0)) {
        if (matrix[j - 1][i - 1]) n++;
      }
      if (j - 1 >= 0) {
        if (matrix[j - 1][i]) n++;
      }
      if ((j - 1 >= 0) && (i + 1 < matrixCol)) {
        if (matrix[j - 1][i + 1]) n++;
      }

      if ((j + 1 < matrixRow) && (i - 1 >= 0)) {
        if (matrix[j + 1][i - 1]) n++;
      }
      if (j + 1 < matrixRow) {
        if (matrix[j + 1][i]) n++;
      }
      if ((j + 1 < matrixRow) && (i + 1 < matrixCol)) {
        if (matrix[j + 1][i + 1]) n++;
      }
      resMatrix[j][i] = n;
      n = 0;
    }
  }

  return resMatrix;
}
