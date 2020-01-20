/**
 * Given an array of integers, returns a new array consisting of only
 * the odd integers from the original array.
 *
 * Return an empty array if no such numbers exist.
 *
 * @example
 * selectOdds([1, 2, 3, 4, 5]); // => [1, 3, 5]
 * selectOdds([10, 2, 19, 10, -103]); // => [19, -103]
 * selectOdds([1, 1, 2, 1]); // => [1, 1, 1]
 * selectOdds([10, 20, 30]); // => []
 *
 * @param {number[]} array - An array of numbers
 * @returns {number[]} A new array consisting of all the odd numbers in the input array
 */
function selectOdds(array) {
  // This is your job. :)
  let newArr= [];
  for(i = 0; i < array.length; i++){
    if(array[i]%2 > 0){
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
  return newArr;
}

if (require.main === module) {
  console.log('Running sanity checks for selectOdds:');
  console.log(selectOdds([1, 2, 3, 4, 5]) === [1,3,5]);
  console.log(selectOdds([10, 2, 19, 10, -103]) === [19, -103]);
  console.log(selectOdds([1, 1, 2, 1]) === [1,1,1]);
  console.log(selectOdds([10, 20, 30]) === []);


  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = selectOdds;
