const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => {
  return word.length > 5;}));


/*Other built-in array methods can be found online. Documentation includes a short definition, a blcok with correct syntax, 
list of parameters, return value of the function, etc.
The syntax of the code above was corrected so the methods would run properly.*/
