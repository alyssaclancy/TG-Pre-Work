const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);

/*Built-in methods can also be used for Objects. List of available methods are found online.
Here, Object.keys() was used to grab the keys and save them in an array.
Object.entries() was used to get the key and value in an array.
Object.assign() was used to assign the properties of robot plus 3 new properties to a new array.
*/
