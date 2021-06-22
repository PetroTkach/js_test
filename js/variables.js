console.log(student); // undefined

var student = "Petro";
console.log(student);

var count;
console.log(count); // undefined

count = 1;
console.log(count);
count = 2;
console.log(count);

// console.log(numder); // Uncaught ReferenceError: Cannot access 'numder' before initialization
// at testJS.js:8

let numder = 30;
console.log(numder);

let age;
console.log(age); // undefined

age = 18;
console.log(age);
age = 25;
console.log(age);

// console.log(userName); Uncaught ReferenceError: Cannot access 'userName' before initialization
// at testJS.js:14

const userName = "Petro";
console.log(userName);

// userName = "" //Uncaught TypeError: Assignment to constant variable. at testJS.js:36

// const user; // Uncaught SyntaxError: Missing initializer in const declaration