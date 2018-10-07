class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random()* 10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

console.log(HospitalEmployee.generatePassword());
console.log(Nurse.generatePassword());
console.log(nurseOlynyk.generatePassword());

/*There is a way to create methods in a class that aren't available in individual instances.
Static methods can only be accessed by appending them to the class that contains it, but not an instance of the class.
A static method was created in the HospitalEmployee superclass. It can be accessed appended to the superclass or class, but not the
nurseOlynyk instance, as attempted in the last line. This returns an error.*/
