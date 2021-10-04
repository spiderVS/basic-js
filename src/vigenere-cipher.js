import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  alphabet = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9, 'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19, 'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25 };

  charMes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

  constructor(modification) { // ставим/убираем ключ reverse в зависимости от входных данных
      this.modification = modification;
      if (modification === false) {
          this.reverse = 1;
      } else if ((modification === true) || (!modification)) {
          this.reverse = 0;
      }
  }

  toUpperCaseSplit(message, key) {
      this.message = message.toUpperCase().split(''); // message -> в верхний регистр -> в массив символов
      this.key = key.toUpperCase().split(''); // key -> в верхний регистр -> в массив символов
      return;
  }

  fullLengthKey() { // делаем массив с ключом равным по длине message. Если данный элемент message не буква в fullkey на это место ставим ''
      this.fullkey = [];
      let k = 0;
      for (let i = 0; i < this.message.length; i++) {
          if (k == this.key.length) k = 0;
          if (this.message[i] in this.alphabet) {
              this.fullkey[i] = this.key[k];
              k++;
          } else this.fullkey[i] = '';
      }
      return;
  }

  reversemachine() { // реверс message, если ключ reverse == 1
      if (this.reverse == 1) this.outMessage = this.outMessage.reverse();
      return;
  }

  //---------------------------------------------------------------------------------------------------

  encrypt(message, key) {

      this.outMessage = [];

      if (!message || !key) throw new Error('Incorrect arguments!'); // проверяем наличие обоих аругментов (message, key)

      this.toUpperCaseSplit(message, key);

      this.fullLengthKey();

      for (let l = 0; l < this.message.length; l++) {
          if (this.message[l] in this.alphabet) {

              this.outMessage.push(this.charMes[this.alphabet[this.fullkey[l]] + this.alphabet[this.message[l]]]) // alphabet[this.message[l]] - это значение свойства данной буквы в message (число), alphabet[this.fullkey[l]] - это значение свойства данной буквы в key (число)

          } else this.outMessage.push(this.message[l]);
      }

      this.reversemachine();

      return this.outMessage.join('');
  }

  decrypt(message, key) {

      this.outMessage = [];

      if (!message || !key) throw new Error('Incorrect arguments!');

      this.toUpperCaseSplit(message, key);

      this.fullLengthKey();

      for (let l = 0; l < this.fullkey.length; l++) {
          if (this.fullkey[l] in this.alphabet) {

              this.outMessage.push(this.charMes[(this.alphabet[this.message[l]] + 26) - this.alphabet[this.fullkey[l]]]) // alphabet[this.message[l]] - это значение свойства данной буквы в message (число), alphabet[this.fullkey[l]] - это значение свойства данной буквы в key (число)

          } else this.outMessage.push(this.message[l]);
      }

      this.reversemachine();

      return this.outMessage.join('');
  }

}
