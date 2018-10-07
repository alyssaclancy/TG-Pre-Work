export let availableAirplanes = [
  {
    name:'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots','flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
  },
  {
    name:'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots','flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
  }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange:  700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;

/*Named and default export statements can be used together. You can also combine the default export statement with the declaration import statement (for different objects).
It is better to not combine, but there are occasions in which it may make sense.
Here, availableAirplanes, flightRequirements, and meetsStaffRequirements were exported as soon as they were declared,
while meetsSpeedRangeRequirements was used with export default at the end of the file.*/
