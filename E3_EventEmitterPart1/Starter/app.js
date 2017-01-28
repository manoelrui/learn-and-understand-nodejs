var Emitter = require('./emitter');

var emitter = new Emitter();

emitter.on('greet', function () {
   console.log('Hey, I am an event');
});

emitter.on('greet', function () {
    console.log('Fool');
});

emitter.emit('greet');

