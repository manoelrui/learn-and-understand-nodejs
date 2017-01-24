// Your Javascript Code Goes Here

// function statement
function greet() {
   console.log('hi')
}
greet();

// functions are firt-class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Tony!');
}
greetMe();

// it's firt-class
logGreeting(greetMe);

// use a function expression to create a function on the fly
logGreeting(function() {
    console.log('Hello Tony!');
});
