/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  // This is your job. :)
  let count = 0;
  for(i=0; i < string.length; i++){
      count++;
  }
  return count;
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(countWords('Happy') === 5);
  console.log(countWords('') === 0);
  console.log(countWords('Sad') === 3);
}

module.exports = countWords;
