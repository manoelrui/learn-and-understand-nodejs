var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

var arr = [];

arr.push(function () {
   console.log('hello 1');
});

arr.push(function () {
    console.log('hello 2');
});

arr.push(function () {
    console.log('hello 3');
});


arr.forEach(function (item) {
    item();
});