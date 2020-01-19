/**
 * Given an input string, returns the longest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The longest word in the input string
 */

function longestWord(string) {
  // This is your job. :)
  let counter = 0;
  let longest = '';
  for(i = 0; i < string.length; i++){
    counter++;
    console.log(longest);
    if(string[i] === ' '){
      longest = string.slice(string[i-counter], string[i]);
      if(longest.length < counter){
        longest = string.slice(string[i-counter], string[i]);
        console.log(longest);
        counter = 0;
      }
    }
  }
  return longest;
}

if (require.main === module) {
  console.log('Running sanity checks for longestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(longestWord("hi there") === there);
}

module.exports = longestWord;
