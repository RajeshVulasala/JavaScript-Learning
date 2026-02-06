// Day 1
/* Topics will be covered
*   Variables
*   Data Types
*   User Interactions(alert, prompt, confirm)
*/

// VARIABLES

let message;
message = 'Hello';
// alert(message);
console.log(message);

// multiple variables in one line

let user = 'John', age = 25, msg = 'Hello';

// ACTIVITY
// the variable message can be imagined as a box labelled "message" with the value "Hello!" in it

let mesag;
mesag = 'Hello';
mesag = 'World'; // here the HELLO msg is replaced with WORLD.
console.log(mesag);

// Copying one variable data to another var

let hello = 'Hello';
let world = hello;
console.log(hello);
console.log(world);

// variable naming will be done using letters, digits, and sysmbols($,_).
// the should not be declared by the start of digits, fist must be a letter or a symbol.

// USE STRICT
/* now in modern days we use let or var to declare a Varible
* In old days, it was technically possible to create a variable by a mere assignment of the value without using let or ver
* This will still work if we don't put USE STRICT on top of the js file
* If we put USE STRICT then me must declare a varible using let because the use strict method disables the old method
*/
// EXAMPLE without using 'use Strict'.
num =5;
console.log(num);

// Using 'USE STRICT'.

/*
"use strict";
nums = 5;
*/
let rajesh = "Vualsala";
console.log(rajesh);

// CONST --> keyword to declare variable.

const myBirthday = "27/06/2004";
console.log(myBirthday);
// myBirthday = 'January';
/// it will show an error because if the variable is declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error

// ACTIVITY - II
/*
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert or console.log (must output “John”).
*/
let name = 'John';
let admin = name;
console.log(admin);

/*Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?*/
let ourPlanet = "Earth";
let CurrentVisitor = "name";

// VARIABLE Scope
// 1.BLOCK SCOPE
// the Variables declared with let and const have block scope.
// EXAMPLE
{
    let blockVariable = "I'm in a block";
    const blockConstant = "Me too!";
    console.log(blockVariable); // Works inside block
}
// if we try to acces them out side the block it shows error.
// console.log(blockConstant); // not defined

// 2. FUNCTION SCOPE
// Variables are accessible throughout the entire function
// till now we dont know about functions. it's just for example.
function calculateTotal() {
    let subtotal = 100;
    let tax = 0.08;

    if (subtotal > 50) {
        let discount = 10; // Block scoped
        subtotal -= discount;
    }

    // subtotal and tax accessible here
    let total = subtotal * (1 + tax);
    return total;

    // discount is NOT accessible here (block scoped)
}

// 3. GLOBAL SCOPE
// Variables declared outside any function or block have global scope
// Global variables
let siteName = "YJC";
const version = "1.0.0";

function displayInfo() {
    // Can access global variables
    console.log(`Welcome to ${siteName} v${version}`);
}

displayInfo(); // "Welcome to AceDevHub v1.0.0"

// Small demo in declaration variable in 'var' and 'let'.
// Problem with var
if (true) {
    var messag = "Hello";
}
console.log(messag); // "Hello" - accessible outside block!

// Better with let
if (true) {
    let betterMessage = "Hello";
}
// console.log(betterMessage); // ReferenceError - properly scoped


// DATA TYPES
// A value in JavaScript is always of a certain type. For example, a string or a number.
/*
* NUMBER
* BIGINT
* STRING
* BOOLEAN
* THE "null" VALUE
* THE "undefined" VALUE
* OBJECTS ANDD SYMBOLS
* THE types of OPERATOES
 */

// 1.NUMBER
let n = 123;
n = 12.345;
// The number type represents both integer and floating point numbers.
/*
* Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
* Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
* we can get it by dividing a number with 0.
*/
console.log(10/0);

// NaN --> represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance.
console.log( "not a number" / 2 ); // NaN, such division is erroneous

// 2.BIGINT
/*
* In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
*/

// A BigInt value is created by appending n to the end of an integer
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
// STRING
//A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// declaring a string using Backticks
// Backticks -- allow us to embed variables and expressions into a string by wrapping them in ${…}.

let nam = "Rajesh";
console.log(`Hello ${nam}!`);
console.log(`Hello ${1 + 2}`);

// There is no character type.
/*
* In some languages, there is a special “character” type for a single character. For example, in the C language and in Java it is called “char”.
* In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.
*/

// 3. BOOLEAN
/*
* The boolean type has only two values: true and false.
* This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
*/
//Example
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Boolean values also come as a result of comparisons:
let isGreater = 4>1;
console.log(isGreater);

// NULL
// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value
let Vayasu = null;

// UNDEFINED

/*
The special value undefined also stands apart. It makes a type of its own, just like null.

The meaning of undefined is “value is not assigned”.

If a variable is declared, but not assigned, then its value is undefined
 */
let a;
console.log(age);
// Technically, it is possible to explicitly assign undefined to a variable
let Yellu = 22;
yellu = undefined;
console.log(Yellu);
/*
* All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
*Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Module 2/Objects, after we learn more about primitives.
* The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
 */

// TypeOf operator
typeof undefined;
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

// USER INTERACTION
// The functions to communicate with users
// alert, prompt, confirm.

// Try these code in Inspect console.

// ALERT
// It shows a message and waits for the user to press “OK".

alert("Rajesh Vulasala");
//The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

// PROMPT
// The function accepts two arguments
// result = prompt(title, [default]);

let yenniyellu = prompt("How old are you", 22);
console.log(yenniyellu);
// The second parameter is optional, but if we don’t supply it, Internet Explorer will insert the text "undefined" into the prompt.
// EX:
let test = prompt('test');

// CONFIRM

//Syntax
// result = confirm(ques);
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
//
// The result is true if OK is pressed and false otherwise.
//EX:
let isYJC = confirm("Are you the boss of YJC?");
console.log(isYJC);