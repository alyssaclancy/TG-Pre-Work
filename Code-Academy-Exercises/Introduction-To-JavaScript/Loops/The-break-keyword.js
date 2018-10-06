const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let rapperArrayIndex = 0; rapperArrayIndex < rapperArray.length; rapperArrayIndex++) {
  console.log(rapperArray[rapperArrayIndex]);
  if (rapperArray[rapperArrayIndex] === 'Notorious B.I.G.') {
    break;
  }
}

console.log('And if you don\'t know, now you know.');

/*The break keyword allows programs to break out of the loop.
Here, if the returned value from the array is Notorious B.I.G., the loop does not continue.
*/
