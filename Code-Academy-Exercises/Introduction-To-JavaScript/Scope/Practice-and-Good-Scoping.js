const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

/*Varibales should be scoped as tightly as possible to make it more legible, understandable, easier to maintain and more modular, and to save memory.
You can adjust the value of a variable within an if block and print one value while maintaining the global value outside the block.
*/
