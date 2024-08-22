// Creating Dates
let date1 = new Date("2023-01-01"); // 2023-01-01T00:00:00.000Z
console.log(date1);
let date2 = new Date("January 1, 2023"); // 2023-01-01T03:00:00.000Z
console.log(date2);
let date3 = new Date(); // Now // 2024-08-22T21:38:29.368Z
console.log(date3);
let date4 = new Date("2023-01-01T02:30:04.312-05:00") // 2023-01-01T07:30:04.312Z
console.log(date4);
let date5 = new Date(2023, 0, 1, 2, 30, 4); // 2023-01-01T05:30:04.000Z
console.log(date5);

// Accessing elements from a date
console.log(`Full Year: ${date5.getFullYear()}`); // Full Year: 2023
console.log(`Month (zero-indexed): ${date5.getMonth()}`) // Month (zero-indexed): 0
console.log(`Day of month: ${date5.getDate()}`) // Day of month: 1
console.log(`Hours: ${date5.getHours()}`) // Hours: 2

// Milliseconds from the epoch
console.log(`Time: ${date5.getTime()}`); // Time: 1672551004000
let date6 = new Date(0);
console.log(date6.toUTCString()); // Thu, 01 Jan 1970 00:00:00 GMT