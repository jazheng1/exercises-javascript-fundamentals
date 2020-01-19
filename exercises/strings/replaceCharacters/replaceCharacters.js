/**
 * Given an input string and a character replacement dictionary, replaces every
 * character found as a key in the dictionary with the corresponding value.
 *
 * @example
 * replaceCharacters('hello', { 'h': 'y', 'l': '8' }); // => 'ye88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {object} replacementDict - The replacement dictionary
 * @returns {string} A copy of the input string with the appropriate
 *   letters replaced according to replacementDict
 */

function replaceCharacters(string, replacementDict) {
  // This is your job. :)
  for(i = 0; i < string.length; i++)
  {
    for(let j of Object.keys(replacementDict)){
    /**why is it that when I use 
    (j =0; j < Object.keys(replacementDict).length; j++)
    if(string[i] === replacementDict[j]){
      string = string.replace(string[i], replacementDict[j]);
    }
    it does not work
    */
    console.log(string)
    if(string[i] === j){
      string = string.replace(string[i], replacementDict[j]);
      console.log(string);
    }
    }
  }
  return string;

}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacters:');
  console.log(replaceCharacters('hello', { 'h': 'y', 'l': '8' }) === 'ye88o' )
  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
}

module.exports = replaceCharacters;
