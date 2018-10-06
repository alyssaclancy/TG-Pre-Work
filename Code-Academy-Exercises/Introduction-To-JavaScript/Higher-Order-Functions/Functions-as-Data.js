const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);

/*You can replace long function names by re-assigning the function to a variable with a short name. That variable holds  a reference to the original function.
Functions in JS are first class objects, so they have properties and methods. They can be invoked, but still treated like a type of data.
Here, the long fucntion name is replaced with is2p2. The original name can be found using the name function dot apended to is2p2.*/
