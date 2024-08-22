// Create an Object with an object literal (preferred)
let obj1 = {};

// Create an Object with a constructor
let obj2 = new Object();

// Populate properties on an object
obj1.firstName = "Roebrto";
obj1.lastName = "Moura";
obj1.isActive = true;
obj1.startDate = new Date("January 1, 2022");
obj1.vacationDays = 14;
console.log(obj1);

// Populate an Object on cretion with object literal syntax
let obj3 = {
    firstName: "Roberto",
    lastName: "Moura",
    isActive: true,
    startDate: new Date("January 1, 2022"),
    vacationDays: 14
};
console.log(obj3);

// Acessing properties from an object
console.log(`First Name: ${obj3.firstName}`);
console.log(`Last Name: ${obj3["lastName"]}`);

// Deleting properties from an object
delete obj3.firstName;
console.log(obj3);

// Accessing a property that doesn't exist
console.log(`Non-existent value: ${obj3.middleName}`) // Undefined

// Objects are passed by reference, not value
let obj4 = obj3; // Now obj4 and obj3 are pointing to the same block of memory
obj4.lastName = "Smith"; // If we update one, we will update the other
console.log(`Last Name (obj3): ${obj3.lastName}`); // Smith