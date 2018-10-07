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
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

/*In the example shown,keyword extend makes the methods of the superclass available inside the subclass.
Keyword super calls the constructor of the superclass. THe super method must be called before you can use the this keyword.
Nurse, a subclass of HospitalEmployee, was created here. A new Nurse instance was created and saved to nurseOlynyk.*/
