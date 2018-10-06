let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
/*A switch statement provides an alternative syntax for else if statements that is easier to read and write.
The switch keyword initiates the statement and cycles through value options using the keyword case.
The break keyword exits the block and quits executing cases. Adding a default statement at the end runs when no other cases are true.
The above acts as an if/else if/else statement to filter through more options with less code. 
*/
