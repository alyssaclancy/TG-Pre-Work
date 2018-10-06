let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*If you are checking if a variable exists, you can use truthy and falsy values.
Falsy values include: 0, empty strings, null, undefined, NaN (Not a Number).
Updating the value of wordCount to a truthy value (from 0 to 1) printed "Great! You've started your work!" because the if statement ran.
Updating the value of favoritePhrase to a falsy value (an empty string) printed "This string is definitely empty" because the else statement ran.
*/
