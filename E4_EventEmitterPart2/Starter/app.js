var Emitter = require('./emitter');
var events = require('./config').events;

var emitter = new Emitter();

emitter.on(events.GREET, function () {
    console.log('Hey, I am an event');
});

emitter.on(events.GREET, function () {
    console.log('Fool');
});

emitter.emit(events.GREET);