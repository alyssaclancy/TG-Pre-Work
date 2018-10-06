const plantNeedsWater = function(day) {
  if (day==='Wednesday') {
    return true;
  }
  else {
    return false;
  }
}

plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));

/*A function expression can be used to define a function. The function name is usually omitted here, so it is an anonymous function.
The variable name references the function with arguments.
A function expression with an if/elsee statement was created above. It was passed a value that executed the else portion and returned the value false.*/
