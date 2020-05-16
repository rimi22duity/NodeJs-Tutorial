//Introduction to Event Module

/* In Event Module, we got a class that is called EventEmitter.
    It is one of the core building blocks of the node and a lot 
    of classes are build on this emitter.

    require('events') basically brings the EventEmitter class.

    NOTE::
    we wrote the EventEmitter as both E uppercase.
    It is because we refer it as a class (a class is a container
        that holds related properties and functions/methods)

    As EventEmitter is a class, we need to create instances of 
    this class first.
 */

const EventEmitter = require('events');

/* This is an instance/object of the class EventEmitter.
   Example of difference between class and object:
        class : Human
        Object : John (A human)
 */
const emitter = new EventEmitter();

/*
    NOTE::
    registering and emitting event should follow the order.
    If the emitter is called before registering the event, then
    it won't work. 
 */
//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called.... ');
});

// emit means Making a noise, produce - signaling
// Raise an event
emitter.emit('messageLogged');
