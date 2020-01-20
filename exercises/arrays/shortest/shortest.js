/**
 * Given an array, returns the shortest element in the array.
 *
 * Assume the array contains only strings.
 *
 * @param {string[]} array - The input array
 * @returns {number} The shortest string in the array
 */
function shortest(array) {
  // This is your job. :)
  let count = array[0].length;
  let word ='';
  let smallestWord = array[0];
  for(i=0; i < array.length; i++){
    word = array[i];
    console.log(word)
    if(word.length < count){
      console.log(count)
      console.log(word)
      count = word.length;
      smallestWord = array[i];
    }
    }
    console.log(smallestWord)
    return smallestWord;
}

if (require.main === module) {
  console.log('Running sanity checks for shortest:');

  // Add your own sanity checks here.
  console.log(shortest(['he', 'has', 'water']) === 'he')
  console.log(shortest(['Peter', 'likes', 'to', 'drink']) === 'to')
  // How else will you be sure your code does what you think it does?
}

module.exports = shortest;
