const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(letter => letter[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number/100);

console.log(smallNumbers)

/*The .map() iterator takes an argument of a callback function and returns a new array.
This was used to select the first letter of each element in the animals array by definining a letter function in the .map iterator
and to divide the bigNumbers array elements by 100.*/
