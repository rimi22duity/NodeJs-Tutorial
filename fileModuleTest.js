const fs = require('fs');
//Intro test to File System Module:

//To print the files in the same folder
/* Methods comes with 2 forms : 
        - sychronous or blocking 
        - Asynchronous or non-blocking
    
    NOTE::
    In real world application we should use Asynchronous methods
    because they are non-blocking.
    A node process has a single thread.
    If you are using node for a backend application, your application
    might have several hundred or thousands of clients connecting to 
    that back-end. If you keep that single thread busy you won't be 
    able to serve many clients. So always use Asynchronous method.
 */
console.log('Following files are in the same folder');
//Using Synchronous method
console.log('Synchronous Method Testing::');
const files = fs.readdirSync('./');
console.log(`Files : ${files}`);

//Using Asychronous method
console.log('Asynchronous Method testing::');
/*NOTE::
  all these Asynchronous methods take a function at their last 
  argument. Node will call this function when that Asynchronous 
  operation will complete. This function is called a callback.
  This is a function with 2 peremeters:
        1. error
        2. result (in this case which is a atring array)
*/
fs.readdir('./', function(err, filesInTheDir) {
    if (err) console.log('Error',  err);
    else console.log('Result', filesInTheDir);
});

// An Example of how error looks
fs.readdir('$', function(err, filesInTheDir) {
    if (err) console.log('Error',  err);
    else console.log('Result', filesInTheDir);
});