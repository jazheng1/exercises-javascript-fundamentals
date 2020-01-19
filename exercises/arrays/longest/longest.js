/**
 * Given an array, returns the longest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The longest string in the array
 */
function longest(array) {
  // This is your job. :)
  let count = 0;
  let word ='';
  let longestWord = '';
  for(i=0; i < array.length; i++){
    console.log(array[0])
    word = array[i];
    console.log(word)
    if(count < word.length){
      count = word.length;
      longestWord = array[i];
    }
    }
    return longestWord;
  }


if (require.main === module) {
  console.log('Running sanity checks for longest:');
  console.log(longest(['his', 'name', 'is', 'Joseph']) === 'Joseph')
  console.log(longest(['', '']) === '');
  console.log(longest(['', 'Peter']) === 'Peter');
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = longest;
