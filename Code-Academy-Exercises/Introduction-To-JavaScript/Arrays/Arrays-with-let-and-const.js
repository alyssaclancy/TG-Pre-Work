let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0]= 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
utensils[3]= 'Spoon';
console.log(utensils);

/*I learned you can change the contents of a const array but cannot reassin a new array or a different value.
In the first array, you can update an element's value and assign a new array.
In the second array, which was defined as const, you can update an element's value.
*/
