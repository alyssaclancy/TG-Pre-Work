const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/*If you use this keyword in a method, the value of this is the calling object. Arrow functions bind an already defined
this value to the function itself that is not the calling object. The value of this is the global onject, or what exists in the global scope.
Avoid using arrow functions when using this in a method.
In the code above, I removed the arrow function and defined the function in a way that it could use the this keyword.
*/
