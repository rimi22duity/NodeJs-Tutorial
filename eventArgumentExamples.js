// Continuing to..  Event Module
// Arguments in events...

/* With the usage of Arguments in events, we can pass data
   about the event that just happened.
 */

const EventEmitter = require('events'); 
const emitter = new EventEmitter();

/* Registering a listener
   the callback function in listener contains the argument
   it can be named anything, i.e. e, eventArgs, args anything.
*/
emitter.on('messageLogger', function(eventArgs) {
    console.log('Listener Called .. ', eventArgs);
});

/* ES6 (ECMAScript 6) allows to use arrowfunction as a callback
   function. Here is how it is done. Basically it allows us to
   get rid of the function keyword and make code simpler.
 */
emitter.on('messageLogger', (eventArgs) => {
    console.log('Listener Called .. ', eventArgs);
});

/* Raising Event and Passing arguments encapsulating them 
   inside an object.
*/
emitter.emit('messageLogger', {id : 1, url : 'http://'});