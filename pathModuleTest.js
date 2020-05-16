// Introduction to Path Module
const path = require('path');

// Returns an object from the path string
var pathObj = path.parse(__filename);
console.log(pathObj);