//While tool is a falsy value, pen is printed in the statement.
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//While tool is a truthy value, market (value of tool) is printed in the statement.
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
/*Short-circuit evaluation can be used to assign variables different values based on whether the values are truthy or falsy.
*/
