import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {

  chainArr: [],

  resultStr: '',

  getLength() {
    return this.chainArr.length;
  },

  addLink(value) {
    this.resultStr = '';
    if (value === undefined) this.chainArr.push('');
    else this.chainArr.push(`${value}`);
    return this;
  },

  removeLink(position) {
    if ((!position) || (typeof(position) !== 'number') || (this.chainArr[position] === undefined)) {
      this.chainArr = [];
      throw new Error("You can\'t remove incorrect link!");
    } else this.chainArr.splice(position-1, 1);
    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  finishChain() {
      for (let i = 0; i <= this.chainArr.length-2; i++ ){
          if (this.chainArr[i] == '')  this.resultStr += `( )~~`;
            else this.resultStr += `( ${this.chainArr[i]} )~~`;
      }
      this.resultStr += `( ${this.chainArr[this.chainArr.length-1]} )`;
      this.chainArr = [];
    return this.resultStr;
  }

};
