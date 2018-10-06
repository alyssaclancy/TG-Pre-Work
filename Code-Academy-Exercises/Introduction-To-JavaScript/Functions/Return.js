function monitorCount(rows, columns) {
  return rows*columns;
}

const numOfMonitors = monitorCount(4,5);
console.log(numOfMonitors);

/*To pass back information from a function call, we use a return statement followed by the value you wish to return.
This also allows you to build in conditional statements to functions.
A function was created to return the product of two parameters. Then it was passed arguments defined by a new constant variable name and printed.
*/
