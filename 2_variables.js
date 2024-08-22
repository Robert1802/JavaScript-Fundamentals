/* Variables

- Names can contain letters, digits, and the $ and the _ characters
- Cannot start a name with a digit
- Names are case sensitive
- Variable names usually start with a lowercase letter
- Names leverage camel case

*/

// Assigning variable values
let firstName = "Roberto";
let lastName = "Moura";
let numYearsEmployment = 2;
let dateBirth = new Date("February 18, 1993");

// Changing a variable created with let
numYearsEmployment = 3;

// Using const to create a constant
const title = "VP of Engineering"

// Dont use var to create variables

/**
    Garbage Collection
    Garbage Collection (GC) is a form of automatic memory management.
    The garbage collector attempts to reclaim memory which was allocated by the program,
    bot is no longer referenced; such memory is called garbage 
 */
/*
    Data Types
    JavaScript is a dynamic language with dynamic types.
    Variables in JavaScript are not directly associated with any particular value type,
    and any variable can be assigned (and re0assigned) values of all types.

    Primitive Types
    Primitives are immutable, meaning they cannot be changed.
    These values have no methods or properties and their data is stored directly on the stack,
    since the engine knows exactly how much memory to allocate for that piece of data.
    Primitives are passed by value. 
    - Boolean, Number, BigInt, String, Symbol, Null and Undefined

    Objects
    Objects are mutable, meaning that their contents can be changed without creating a new object.
    Objects can contain a collection of properties.
    They are passed by reference and stored on a heap.
    - Plain Objects, Functions, Collection types (Array, Maps, Set), Dates, Class Instances, Errors and Promises
*/