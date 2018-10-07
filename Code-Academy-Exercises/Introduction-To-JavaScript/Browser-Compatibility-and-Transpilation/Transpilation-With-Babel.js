"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";

/*Manually converting back to ES5 is unsustainable with large files.
Babel is a library that can transpile ES6 back to ES5.
Babel packages were installed using command lines:
npm install babel-cli
npm install babel-present-env
and then run using npm run build
The code was converted, as shown above.
*/
