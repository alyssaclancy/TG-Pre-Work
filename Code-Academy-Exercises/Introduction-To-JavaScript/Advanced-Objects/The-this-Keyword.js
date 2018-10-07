const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

/*The this keyword references the calling object which proivdes access to the calling object's properties.
Above, this.model is used because if this. is not included, we don't have automatic access to the other properties of the object.
*/
