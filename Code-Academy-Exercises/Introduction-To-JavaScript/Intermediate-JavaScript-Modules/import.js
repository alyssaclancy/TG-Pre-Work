import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();


/*Import is also a keyrod to use in ES6. The import keyword beings the statement. The name of the variable to store the default export in is listed next.
From references were to load the module from and then the module to load follows.
The Airplane module was imported into this file to display the fuel capacity of both planes definied in the airplane.js file.*/
