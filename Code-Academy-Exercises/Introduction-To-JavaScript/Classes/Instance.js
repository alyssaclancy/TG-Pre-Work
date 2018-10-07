class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*An instance is an objec that contains the property names and methods of a class with unique property values.
Here, surgeonCurry and surgeonDurant were instances created of the class Surgeon.
*/
