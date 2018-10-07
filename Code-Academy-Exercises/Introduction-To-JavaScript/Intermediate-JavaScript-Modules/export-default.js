let Airplane = {};
Airplane.availableAirplanes = [
  {
    name:'AeroJet',
    fuelCapacity: 800
  },
  {
    name:'SkyJet',
    fuelCapacity: 500
  }
];

export default Airplane;

/*Default export syntax allows us to export one module per file.
We use export default in place of module.exports.
Above, a property was added to Airplane that lists the availableAirplanes and the Airplane module was exported using export default.
*/
