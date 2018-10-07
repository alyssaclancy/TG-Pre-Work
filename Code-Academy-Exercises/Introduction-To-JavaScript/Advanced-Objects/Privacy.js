const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/*Privacy is the idea that only certain properties should be mutable or able to change in value.
JavaScript does not have privacy built-in for objects. It is common to put an underscore in front of a property to mean the property should not be altered, but it is possible to change it even with this notation.
Here, energy level was changed from a value to a string. When the recharge function is called on robot,
the number 30 is attempted to be added to a string value. The output is a "side-effect of type-coercion", which put the 30 and the string side by side./
