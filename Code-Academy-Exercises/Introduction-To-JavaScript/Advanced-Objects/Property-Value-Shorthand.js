function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*Destructuring technique called poperty value shorthandt eliminates the need to repeat the property assignments.
The above factory function was destructured using property value shorthand and the properties were printed to confirm it worked.
*/
