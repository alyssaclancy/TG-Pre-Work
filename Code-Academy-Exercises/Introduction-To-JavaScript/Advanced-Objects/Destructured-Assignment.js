const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;
functionality.beep();

/*Key-value pairs can be extracted and saved as properties.
Destructured assignment can do the same thing while saving keystrokes. This also works for nested properties.
The variable functionality extracts the functionality property of robot using shorthand. Then the beep function is called on functionality. which is nested inside of funcitonality insid eof robot.
*/
