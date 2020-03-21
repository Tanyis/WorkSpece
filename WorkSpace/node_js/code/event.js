var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function () {
    console.log('come_event occured.')
});

setTimeout(() => {
    event.emit('some_event')
}, 1000);