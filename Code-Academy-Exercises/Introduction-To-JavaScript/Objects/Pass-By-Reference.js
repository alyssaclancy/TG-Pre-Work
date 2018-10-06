let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = objectType => {
  objectType['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = objectType => {
  objectType['disabled'] = true;
};

greenEnergy(spaceship);
console.log(spaceship);

remotelyDisable(spaceship);
console.log(spaceship);

/*Objects are passed by reference, meaning the computer interprets a paramter name as pointing to space in memory holding that object when we pass a variable assigned to an object.
Therefore, functions that change object properties permanently mutate the object, even when it is assigne dto a const variable.
The function greenEnergy permanently mutated the Fuel Type for spaceship and the function remotelyDisable added a disabled property set to true for spaceship.
*/
