// What happens when you don't give a variable a value
let x;
console.log(x); // Undefined
console.log(typeof(x)); // Undefined
x = "Hello";
console.log(x); // Hello

// How do we set a variable to a purposefully empty value
let manager = null;
console.log(manager); // null
console.log(typeof(manager)); // object