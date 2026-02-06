// day 2
/*
Topic to be covered:
* Type Conversions
* Basic Operators
* Comparitions
*/

// Type Conversions
/* chal sarlu operations and functions automatically converts the values given to its right type.
* 'Alert' --> automaticaly converts any value to string.  */

// 1. STRING CONVERSION
/*
* alert(value) --> gives string value as output
* To convert a value into string then we have to use "String(vale)" function
*/

let value = true;
console.log(typeof value);
// converting 'value' to string.
value = String(value);
console.log(typeof value);

// 1. NUMERIC CONVERSION
/*
* Numeric conversion in mathematical functions and expressions happens automatically.
*/
// EXAMPLE: when "/" is applied to non-numbers.
console.log("10"/"2");
// console.log("10"+"20");

// Using 'Number(value)' function.
let str = "123";
str = Number(str);
console.log(typeof str);

let str1 = "Rajesh";
str1 = Number(str1);
console.log(typeof str1);

let age = Number("an arbitrary string instead of a number");
console.log(age); // NaN

/*
* Value = undefined Then it Becomes = NaN
* Value = null, Becomes = 0
* Value = true & false,, Becomes = 1 and 0
*/

// BOOLEAN CONVERSION
/*
* Using 'Boolean(value)' Function
* Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
* Other values become true.
*/
// EXAMPLE:
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true ( any non-empty string is true)
/*
* Value = 0, null, undefined, NaN, "". Becomes = false
* Value = any other value, Becomes = True
*/

// BASIC OPERATIONS, MATHS
/*
* Unary
* Binary
* operand
*/
// OPERAND = is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number.

//Unary
let x = 1;
x = -x;
console.log(x); // -1, unary negation was applied

// Binary
let X =1, y =3;
console.log(y - X);

// MATHS
/*
* ADDITION +
* SUBSTRACTION -
* MULTIPLICATION *
* DIVISION "/"
* REMAINDER %
* EXPONENTIATION **
*/

// REMAINDER
// returns the remainder
console.log(10%5);
console.log(8%3);

// EXPONENTIATION **
// IF we write "a ** b" the is mean as 'a' to the power of 'b'.
console.log(2 ** 5); // 2^5
console.log(3 ** 6); // 3 ^6


// STRING concatenation with binary +
let name = "Rajesh " + "Vulasala";
console.log(name);
console.log("1"+2);
console.log(2+"1");

// Numeric conversion, unary +
// No effect on numbers
let a = 1;
console.log( +a ); // 1

let Y = -2;
console.log( +Y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

// Activity
let apples = "2";
let banana = "3";
// console.log(apples + banana);
console.log(+apples + +banana);

/*
* OPERATOR PRECEDENCE
Precedence	Name	             Sign
…	        …	                 …
14	        unary plus	         +
14	        unary negation	     -
13	        exponentiation	     **
12	        multiplication	     *
12	        division	         /
11	        addition	         +
11	        subtraction	         -
…	        …	                 …
2	        assignment	         =
…	        …	                 …
*/

// ACTIVITY
let b0= 2*2+1;
console.log(b0);

let x1 = 1, x2 = 2;
let c = 3 - ( x1 = x2 +1);
console.log(c);
console.log(x1);

// EX 2:
let n = 2;
n = n + 5;
n = n * 2;
console.log(n);

// INCREMENT / DECREMENT

let counter = 0;
counter++; // works same as 'counter + 1'.
console.log(counter);

let countr1 = counter;
countr1--; // counter - 1
console.log(countr1);

/* The operators ++ and -- can be placed either before or after a variable.
* When the operator goes after the variable, it is in “postfix form”: counter++.
* The “prefix form” is when the operator goes before the variable: ++counter.
*/

// EX:
let cntr = 1;
let a1 = ++cntr; // (*)

alert(a1); // 2

// BITWISE OPERATORS
/*
* Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
* The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

// COMMA

let a2 = (2+1, 3+1);
console.log(a2);

// COMPARISIONS
/*
* In JavaScript they are written like this:
>, <
>=, <=
==
!=
*/