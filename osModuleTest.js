/*  Introduction to OS Module
    Before nodeJs, Os info are not accessible in browsers 
*/
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

/* console.log('Total Memory: ' + totalMemory);
console.log('Free Memory: ' + freeMemory);
 */
/*Template String
  ES6 / ES2015 : ECMAScript 6 */
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);