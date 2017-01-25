// Your Javascript Code Goes Here

var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function() {
        console.log('Hello, ' + this.firtname + ' ' + this.lastname);
    }
}

person.greet();
console.log(person['lastname']);
