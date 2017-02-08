angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = 'Hello';

    this.people = [
        {name: 'John'},
        {name: 'Jane'},
        {name: 'Jin'}
    ]
}