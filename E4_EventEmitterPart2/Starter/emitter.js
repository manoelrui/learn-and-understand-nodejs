/**
 * Created by rui on 28/01/17.
 */
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emit = function (type) {
    if(this.events[type]) {
        this.events[type].forEach(function (item) {
            item();
        });
    }
};

module.exports = Emitter;


