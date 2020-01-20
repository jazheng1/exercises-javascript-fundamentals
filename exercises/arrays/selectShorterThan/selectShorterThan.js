/**
 * Given an array of strings and a threshold length, returns a new array
 * consisting of only the strings with length strictly less than the
 * given threshold.
 *
 * Return an empty array if no such strings exist.
 *
 * @example
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0); // => []
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1); // => ['']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2); // => ['', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3); // => ['', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4); // => ['', 'aaa', 'bb', 'c']
 * selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5); // => ['', 'aaa', 'bb', 'c', 'dddd']
 *
 * @param {string[]} array - An array of strings
 * @param {number} threshold - A length threshold
 * @returns {string[]} An array of all strings in the input array with length
 *  strictly less the given threshold
 */
function selectShorterThan(array, threshold) {
  // This is your job. :)
  let newArr = [];
  for(i = 0; i< array.length; i++){
    if(array[i].length < threshold){
      newArr.push(array[i]);
    }
  }
  console.log(newArr)
  return newArr;
}

if (require.main === module) {
  console.log('Running sanity checks for selectShorterThan:');
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 0) === [])
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 1) === [''])
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 2) === ['', 'c'])
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 3) === ['', 'c', 'bb'])
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 4) === ['', 'c', 'bb', 'aaa'])
  console.log(selectShorterThan(['', 'aaa', 'bb', 'c', 'dddd'], 5) === ['','c','bb', 'aaa', 'dddd'])
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectShorterThan;
