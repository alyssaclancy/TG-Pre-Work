class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays = this._remainingVacationDays - daysOff
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*Class method and getter syntax is the same as it is for objects except you can't include commas between methods.
3 getters were created within the Surgeon class that return the value of the properties. A method was also created that decreases _remainingVacationDays by the number of days taken off.
*/
