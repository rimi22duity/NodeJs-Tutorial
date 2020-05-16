const EventEmitter = require('events');

const Logger = require('./loggerEventModule');
const logger = new Logger();

logger.on('messageLogger', (args) => {
    console.log('Listener Called', args);
});

logger.log('Hello There ! ');
