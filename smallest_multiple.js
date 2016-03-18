/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
	var result;
  	var arr = [];

//Add each number up to ceiling into array
  for (var i = 1; i <= ceiling; i++) {
  	arr.push(i);
  }

//Check that max is divisible by all numbers in array;
  for (var i = 0; i < arr.length; i++) {
  	if (result % arr[i] !== 0) {
  		result += 2;
  		i = 0;
  	}
 }


  return result;
};