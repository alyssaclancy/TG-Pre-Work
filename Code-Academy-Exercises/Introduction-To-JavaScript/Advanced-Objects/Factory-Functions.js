const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true);

tinCan.beep();


/*factory functions return an object and can be reused to make multiple object instances.
The parameters can be set so the return objects can be customized.
The code above allows ease in creating multiple objects with different parameters using the same factory functions.
*/
