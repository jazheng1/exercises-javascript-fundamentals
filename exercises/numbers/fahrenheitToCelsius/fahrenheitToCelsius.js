/**
 * Given a temperature in Fahrenheit, return the temperature in celsius.
 *
 * @param {number} temp - The temperature in Fahrenheit
 * @returns {boolean} The temperature in celsius
 */
function fahrenheitToCelsius(temp) {
  // This is your job. :).
  return (temp-32)*5/9;
}

if (require.main === module) {
  console.log('Running sanity checks for fahrenheitToCelsius:');

  // Your sanity checks go here.
  console.log(fahrenheitToCelsius(32) === 0);
  console.log(fahrenheitToCelsius(98.6) === 37);
}

module.exports = fahrenheitToCelsius;
