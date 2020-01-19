/**
 * Given an input string, returns a copy of the input string with the
 * first letter capitalized.
 *
 * See:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
 *
 * @param {string} string - The string to capitalized
 * @returns {string} A capitalized copy of the string
 */

function capitalize(word) {
  // This is your job. :)
  let firstLetter = word.slice(0,1);
  console.log(firstLetter);
  firstLetter = firstLetter.toUpperCase();
  console.log(firstLetter);
  let newWord = firstLetter + word.slice(1, word.length);
  console.log(newWord);
  return newWord;
}

if (require.main === module) {
  console.log('Running sanity checks for capitalize:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(capitalize('happy') === 'Happy');
  console.log(capitalize('') === '');
  console.log(capitalize('sad') === 'Sad');

}

module.exports = capitalize;
