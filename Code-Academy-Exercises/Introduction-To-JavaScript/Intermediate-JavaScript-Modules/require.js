const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

/*The require() function is a common way to import the module.
This is a JavaScript funciton that enables a module to load by passing in the module's filepath as a parameter.
Then the module and its properties can be used within a program.
Using require() here imported the Airplane module from 1-airplane.js. The properties
could be accessed in this new file in the function created.*/
