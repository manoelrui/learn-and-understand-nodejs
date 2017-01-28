'use strict';

class Person {
    constructor() {
        this.firstname = 'John';
        this.lastname = 'Doe';
    }

    greet() {
        console.log('Hello ' + this.firstname + ' ' + this.lastname);
    }
}


// function Person() {
//     this.firstname = 'John';
//     this.lastname = 'Doe';
// }
//
// Person.prototype.greet = function() {
//     console.log('Hello ' + this.firstname + ' ' + this.lastname);
// }

var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);