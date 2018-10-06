const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves);

/*When a variable is defined inside a block it is only accessible within the curly braces. This is block scope, or local variables.
This first prints 'Moonlight' from inside the function and then logs a reference error as the local variable cannot be accessed outside the function.
*/
