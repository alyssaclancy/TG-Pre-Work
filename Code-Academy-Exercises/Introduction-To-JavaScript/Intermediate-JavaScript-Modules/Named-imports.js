import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
}

displayStaffStatus();

/*To import named objects that are stored in variables, you use similar notation as named exports, and add the from and filepath.
Here, objects were imported under variable names at the beginning of the code, so references to the original module were removed.
*/
