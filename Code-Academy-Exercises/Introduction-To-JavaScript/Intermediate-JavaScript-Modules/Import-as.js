import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element){
    console.log('Fuel Capacity of '+ element.name + ': ' + element.fuelCapacity);
  });
};

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requredStaff));
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element){
  console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();

/*If variables are exported under aliases, they must be imported under those aliases.
Here, the aliases used in the related file (included in Export-as.js here) were used in the import statement. They were also used throughout the body.
This improved the code readability by shortening the names.
*/
