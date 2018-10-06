let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 6;
delete spaceship['Secret Mission'];

/*Objects are mutable, so they can be updated after they are created. Dot notation or bracket notation and the assignment operator = can be used to add new key-value pairs to an object or change and existing property.
We cannot reassign an objsect declared with const, but we can still mutate it, so the properties can be changed.
You can also delete a property from an object using delete.
The code above updates the properties after they are created.
*/
