/*
This function will determine if the the number entered is a perfect square
If it is, it will return true
Otherwise, it will return false

So if 49 is entered, the function will return true
If 30 is entered, the function will return false
If a negative number is inputed, it will return false

*/

function isPerfectSquare(num){
    let answer = Math.sqrt(num);
    let rounded = Math.floor(answer);
    return answer - rounded === 0;
}

if (require.main === module) {
    console.log('Running sanity checks for isPerfectSquare:');
  
    // Your sanity checks go here.
    console.log(isPerfectSquare(-49) === false);
    console.log(isPerfectSquare(49) === true);
    console.log(isPerfectSquare(32) === false);
    console.log(isPerfectSquare(0) === true);
  }
  
  module.exports = isPerfectSquare;
