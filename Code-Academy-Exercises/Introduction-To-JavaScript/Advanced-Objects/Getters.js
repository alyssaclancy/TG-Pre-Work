const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robot.energyLevel);



/*Getters are methods that get and return internal properties of an object. They can perform an action on the data, return different values using conditionals,
access the properties of the calling object using this, and make our code more understandable.
The get keyword was used above to access properties of robot using this._energyLevel.
*/
