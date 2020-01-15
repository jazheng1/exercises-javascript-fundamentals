/**
 * Given two non-negative integers, `n` and `b`, return `true` of `n` is a power of `b`
 * and `false` otherwise.
 *
 * A number is a `n` power of `b` if it can be written as `b**k` for some positive integer `k`,
 * where "`**`" represents the exponentiation operator.
 *
 * For example, since `8` equals `2 * 2 * 2`, which is `2**3`, then `8` is a power of `2`.
 * Conversely, `9` is not a power of `2` since there's no integer `k` such that `9 === 2**k`.
 *
 * @example
 * isPowerOf(2) // => true
 * isPowerOf(3) // => false
 * isPowerOf(4) // => true
 * isPowerOf(2**20) // => true
 * isPowerOf(2**20 + 1) // => false
 *
 * @param {number} num - The input number
 * @returns {boolean} True if input is a power of 2 and false otherwise.
 */
function isPowerOfTwo(num) {
  // Your code here
  // Remember, you can assume that num is a positive integer.
  let b = 2;
  if(num === 0){
    return true;
  }else{
    while(num > b){
      b = 2 * 2;
    }
  }
  return b === num;
}


if (require.main === module) {
  console.log('Running sanity checks for isPowerOfTwo:');

  // Is 0 a power of two? Is 1?
  console.log(isPowerOfTwo(0) === true);
  console.log(isPowerOfTwo(1) === false);

  console.log(isPowerOfTwo(2) === true);
  console.log(isPowerOfTwo(3) === false);
  console.log(isPowerOfTwo(4) === true);
  console.log(isPowerOfTwo(16) === true);
}

module.exports = isPowerOfTwo;

