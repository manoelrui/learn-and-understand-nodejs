/**
 * Created by rui on 27/01/17.
 */
function Greetr() {
    this.greeting = 'Hello World!!';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();
