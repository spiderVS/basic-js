import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.n = 1;
  }
  calculateDepth(array) {
    this.array = array;
      for (let i = 0; i < this.array.length; i++) {
           if (Array.isArray(this.array[i])) {
              this.array = this.array.flat();
              this.depth ++;
              this.depth = this.calculateDepth(this.array);
          }
      }
      this.n = this.depth;
      this.depth = 1;
      return this.n;
  }
}
