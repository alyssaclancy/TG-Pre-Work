// Write your code below
const bobsFollowers = ['Al', 'Ben', 'Max', 'Fred'];
const tinasFollowers = ['Amy', 'Al', 'Max'];
const mutualFollowers = [];

for (let i=0; i < bobsFollowers.length; i++) {
  for (let j=0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

/*A nested loop runs inside another loop. A nested for loop can compare the elements in two arrays.
The nested for loop runs through tinasFollowers while the outer for loop runs through bobsFollowers.
Any of the same followers are pushed to mutualFollowers, and then printed outside of the for blocks.
*/
