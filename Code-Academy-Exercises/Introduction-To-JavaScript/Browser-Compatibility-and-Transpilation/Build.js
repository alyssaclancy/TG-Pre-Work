"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";

/*I previously added a "build" script to package.json (updated the Babel-Soure-Lib.json file to .json extension).
Now, running npm run build enables the code to be transpiled. The new file of transpiled code is copied above.
In total, the steps for setting a project up for transpilation include:
1. initialize project using npm init and create a directory called src.
2. install babel dependencies by running npm install babel-cli -D and npm install babel-preset-env -D
3. create a .babelrc file inside your project with the code
 {
 "presets": ["env"]
 }
4. add "build": "babel src -d lib" to scripts object in package.json
5. npm run build when you want to transpile code from src to lib directory.
*/
