/**
 * Given a positive integer, return an array consisting of all its prime
 * factors sorted from smallest to largest. Each prime appears in the
 * returned array as many times as it divides the given integer.
 *
 * @example
 * primeFactors(2); // => [2]
 * primeFactors(2 * 2); // => [2, 2]
 * primeFactors(2 * 2 * 3); // => [2, 2, 3]
 * primeFactors(2 * 2 * 3 * 17 * 197); // => [2, 2, 3, 17, 197]
 * primeFactors(917329); // => [7, 7, 97, 193]
 *
 * @param {number} num - A positive integer
 * @returns {number[]} An array of all the prime factors of the given integer
 */

function isPrime(num) {
  /*
    Your code goes here.
  
    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */
 if(num <= 1){
  return false;
 }
 else if((num % 3 === 0) && (num > 4)){
   return false;
 }else if((num % 5 === 0) && (num > 5)){
   return false;
 }else if((num % 2 === 0) && (num > 3)){
  return false;
}
 else{
   return true;
 }
}


function primeFactors(num) {
  /*
    Your code goes here.

    Work out one version that works and don't worry about performance.

    If you're having trouble working it out in code, step out of JS-land
    and use pen/paper, index cards, etc. — anything that helps you think
    about it without getting stuck in JavaScript syntax.
  */
 let array= [];
 let quotient = 0;
 for(i=2; i <= num; i++){
   if(num%i === 0){
     if(isPrime(i) === false){
      quotient = i
     }
     else(isPrime(i) === true)
      array.push(i);
   }
 }
 return array;
// for(j=0; j < array.length; j++)
// {
//     if((array[j] % 2 == 0) && (array[j] > 2)){
//       primeArray.push(j);
//     }else if((array[j] % 3 != 0) && (array[j] > 3)){
//       primeArray.push(j);
//     }else((array[j] % 5 != 0) && (array[j] > 5))
//       primeArray.push(j);
//     }
  // return array;
}

if (require.main === module) {
  console.log('Running sanity checks for primeFactors:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(primeFactors(2));
  console.log(primeFactors(4));
  console.log(primeFactors(12));
  // console.log(primeFactors(917329));
}

module.exports = primeFactors;
