let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

/*You can also use bracket notation to access a key's value. The property name is passed as a string.
Bracket notation has to be used when accessing keys that have numbers, spaces, special characters.
*/
