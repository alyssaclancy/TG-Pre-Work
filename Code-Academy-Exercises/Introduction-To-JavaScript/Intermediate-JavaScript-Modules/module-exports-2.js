//Code from 2-airplane.js
let Airplane = {};
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

//Code from 2-missionControl.js
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

/*I learned you can wrap a collection of data and funtions in an object and export it, using module.exports.
Properties of the Airplane object were defined in the airplane file, which was then required into the mission control file.
The behavior in the airplane file could still be accessed.
*/
