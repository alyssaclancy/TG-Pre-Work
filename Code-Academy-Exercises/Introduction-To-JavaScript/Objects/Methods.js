let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
      retreat() {
        console.log(retreatMessage)
      },
  		takeOff() {
  			console.log('Spim... Borp... Glix... Blastoff!')
      }
};

alienShip.retreat();
alienShip.takeOff();

/*A method is function data sroted on an object.Some examples of global javascript objects are console and Math.
Methods retreat and takeOff were added to the object literal and then invoked.
*/
