const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/*Having too many global variables can cause problems because they go to the global namespace, which can fill up really quickly.
Inside the callMyNightSky function, the value of stars was changed. Later outside the function, the new value of stars is printed, but it's hard to follow what happened.
*/
