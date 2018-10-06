const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);

const startsWithS = animals.findIndex(sAnimal => { return sAnimal[0] === 's'});
console.log(startsWithS);

/*The .findIndex() method on an array returns the index of the first element that evaluates to true in the callback function.
If there is no element that satisfies the condition in the callback, then -1 is returned.
The .findIndex() method was used to print the index of the first string 'elephant' in the array, and the first string to start with the letter 's'.
*/
