const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

/*Pass-by-reference - if you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function.
This is demonstrated in both functions above.*/
