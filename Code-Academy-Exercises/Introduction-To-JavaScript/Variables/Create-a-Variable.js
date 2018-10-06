//var: variables defined and values printed
var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);


//let: variable defined, then changed and printed.
let changeMe = true;
changeMe = false;
console.log(changeMe);

//const: variable defined, then printed. Attempt to change variable or not initiate value throws a TypeError or SyntaxError.
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos';
//const testing;

/*var (variable) creates or declares new variables. They cannot start with numbers and are case sensitive and cannot be the same as keywords.
let signals the variable can be reassigned a different value. You can declare a variable without declaring value, so it is initialized with the value undefined.
const is short for the word constant, which cannot be reassigned. Constants must be assigned a value when declared.
*/
