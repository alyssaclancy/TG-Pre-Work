"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";

/*I previously added a "build" script to package.json (updated the Babel-Soure-Lib.json file to .json extension).
Now, running npm run build enables the code to be transpiled. The new file of transpiled code is copied above.
*/
