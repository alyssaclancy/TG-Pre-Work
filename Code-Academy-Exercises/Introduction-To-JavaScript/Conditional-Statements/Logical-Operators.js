//&& outputs 'not bed time yet'
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood==='sleepy' && tirednessLevel>8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//|| with negated else statement prints 'time to sleep'
let mood = 'sleepy';
let tirednessLevel = 6;

if(mood==='sleepy' || tirednessLevel>8) {
  console.log('time to sleep');
} else {
  console.log(!'not bed time yet');
}



/*Logical operators work with boolean values. 
and && - both conditions must evaluate to true.
or || - either condition can evaluate to true.
not (bang) ! - reverses the value of a boolean (evaluates to true and passes back false or vice versa).
*/
