// tsc -v
// npm install -g typescript@3.7.2
// tsc basic-types.ts
var isDone = false;
var age = 20;
var binaryNumber = 15;
var firstName = 'viking';
var message = "Hello, ".concat(firstName, ", age is ").concat(age);
var u = undefined;
var n = null;
var num = undefined;
var notSure = 4;
notSure = 'maybe it is a string';
notSure = true;
notSure.myName;
notSure.getName();
var numberOrString = 234;
numberOrString = 'abc';
var arrOfNumbers = [1, 2, 3, 4];
arrOfNumbers.push(5);
function test() {
    console.log(arguments);
}
var user = ['viking', 1];
