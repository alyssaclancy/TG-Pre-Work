const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue}, 10);

console.log(newSum);

/*The .reduce() method returns a single value after iterating through elements of an array, thereby reducing the array.
The array was iterated through each index position using two parameters and the values were added together.
When the accumlator started at 10, newSum ended at 26.
*/
