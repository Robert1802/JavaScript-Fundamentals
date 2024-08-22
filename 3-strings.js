// Creating single-line strings
let firstName = "Roberto"; // Double Quotes
let lastName = 'Moura'; // Single Quotes
let title = `Software Developer Engineer III`; // Back tick
title = `Senior Full Stack Developer`;

// String concatenation with the plus operator
let fullName = firstName + " " + lastName;

// String concatenation with template literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Creating multi-line strings with \n
let bio = "Line 1\nLine 2\nLine 3";
console.log(bio);

// Creating multi-line strings with backticks
bio = `About Roberto Moura:
This guy has been grinding his way since 2014
And now he is about to change stacks and score a new position`;

// Escaping characters
let quote = 'Roberto said, "JavaScript is cooler then C#"';
quote = "David said, \"JavaScript is cooler then C#\"";
quote = `JavaScript can use 'singl' and "double" quotes.`;
quote = `In JavaScript, you must escape the \\ characters`;
console.log(quote);

// String length
let length = quote.length;
console.log(`Quote Lenth: ${length}`);

// Accessing specific characters
let secondCharacter = quote[1]; //n //JS is zero based
console.log(`Second Character: ${secondCharacter}`);

// Changing case
let uppercaseName = fullName.toUpperCase();
console.log(uppercaseName);
let lowercaseName = fullName.toLowerCase();
console.log(lowercaseName);

// Finding a substring
let idx1 = fullName.indexOf("Rob");
console.log(`Index 1: ${idx1}`); // 0 - Located in the beginning
let idx2 = fullName.indexOf("Mou");
console.log(`Index 2: ${idx2}`); // 8 - Located 8 characters later
let idx3 = fullName.indexOf("xyz");
console.log(`Index 3: ${idx3}`) // -1 - Because "xyz" doesn't inside the fullName variable 

// Does a string contain a substring
let doesContain = fullName.includes("Rob");
console.log(doesContain); // true