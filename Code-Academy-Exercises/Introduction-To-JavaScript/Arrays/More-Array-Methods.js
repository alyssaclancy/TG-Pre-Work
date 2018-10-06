const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));
console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

/*There are more array methods that can be found online.
.pop() and .push() mutate the array they are called on. Some other array methodsw include
.join(), .slice(), .splice(), .shift(), .unshift(), and .concat().
.shift removes the first item, .unshift adds a first item, .slice is not mutating but returns just a portion of the array as indicated.
.indexOf() retrieves the index of a variable.
*/
