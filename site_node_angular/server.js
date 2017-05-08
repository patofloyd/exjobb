// globals
m = {}; // all modules
g = {}; // all global variables (ex. settings)

// Require modules
[
  "express",
  "path",
  "fs",
  "body-parser",
  "request",
  "cookie-parser",
  "compression",
  "./mySettings",
  "./classLoader"
].forEach(function(x){
  // store required modules in "m"
  m[x.replace(/\W/g,'')] = require(x);
});

console.log("All loaded modules", Object.keys(m));

// constructs g.settings object
m.mySettings();

// // loads all classes
m.classLoader();

// start express server
new g.classes.Server();
