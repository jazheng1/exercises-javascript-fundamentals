/**
 * Given a numerical grade from 0 to 100, return a letter grade.
 *
 * The minus/plus cutoffs are at 2 and 6, respectively. For example,
 * 80-82 is a B+, 83-86 is a B, and 87-89 is a B+. Anything below 60 is an F.
 *
 * @example
 * letterGrade(50); // => 'F'
 * letterGrade(70); // => 'C-'
 * letterGrade(89); // => 'B+'
 *
 * @param {number} percentGrade - A number between 0 and 100 (inclusive), representing
 *  a student's percentage grade.
 * @return {string} The corresponding letter grade for the given percentage grade
 */
function letterGrade(percentGrade) {
  // This is your job. :)
  let gradeLetter = '';

  if(percentGrade >= 97){
    gradeLetter = 'A+';
  }else if(percentGrade >= 90 && percentGrade <= 92){
    gradeLetter = 'A-';
  }else if(percentGrade >= 93 && percentGrade <= 96){
    gradeLetter = 'A';
  }else if(percentGrade >= 87 && percentGrade < 90){
    gradeLetter = 'B+';
  }else if(percentGrade >= 80 && percentGrade <= 82){
    gradeLetter = 'B-';
  }else if(percentGrade >= 83 && percentGrade <= 86){
    gradeLetter = 'B';
  }else if(percentGrade >= 77 && percentGrade < 80){
    gradeLetter = 'C+';
  }else if(percentGrade >= 70 && percentGrade <= 72){
    gradeLetter = 'C-';
  }else if(percentGrade >= 73 && percentGrade <= 76){
    gradeLetter = 'C';
  }else if(percentGrade >= 63 && percentGrade <= 76){
    gradeLetter = 'D';
  }else if(percentGrade >= 67 && percentGrade < 70){
    gradeLetter = 'D+';
  }else if(percentGrade >= 60 && percentGrade <= 62){
    gradeLetter = 'D-';
  }else{
    gradeLetter = 'F';
  }
  
  return gradeLetter;
}
if (require.main === module) {
  console.log('Running sanity checks for letterGrade:');
  console.log(letterGrade(89) === 'B+')
  console.log(letterGrade(50) === 'F')
  console.log(letterGrade(60) === 'D-')
  console.log(letterGrade(0) === 'F')
  console.log(letterGrade(73) === 'C')
  console.log(letterGrade(100) === 'A+')
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = letterGrade;
