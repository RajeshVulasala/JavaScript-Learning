// Day 3 of learning
/*
* Conditional branching: if, '?'
* Logical operators
* Nullish coalescing operator '??'
*/

// Condition Branching
// 1. if
// 2. '?'

// 1. IF

// IF Condition
let DBY = prompt("Enter your birth year:");
if (DBY == 2004)
    alert("You are 21 years old");

        // Boolean conversion
        /* The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”. 
*/

if(0){ // 0 is falsy
        
}

if(1){ // i is truth

}

//   Else Clause

let day = prompt("If solve this puzzle you can enter into website. Tip: 'DAY'");
if(day == "Today"){
    alert("Welcome to Rajesh Vulasala's Website");
}

// ELSEIF

let iroju = prompt("If solve this puzzle you can enter into website. Tip: 'DAY'");
if (iroju == "Today"){
    alert("Welcome to Rajesh Vulasala's Website");
}else if(iroju == "today"){
    alert("You tried your best: WELCOME To Rajesh Vulasala's Website");
}else {
    alert("Try again next  time");
}

// Conditional Operator

let accessAllowed;
let age = prompt('How old are you?','');
if(age>18){
    accessAllowed = true;
} else{
    accessAllowed = false;
}
alert(accessAllowed);

// useing conditional Operator '?'

// SYNTAX:
let result = condition ? value1 : value2;

let accessAllow = (age>18)? true:false;

// MULTIPLE '?'

let vayasu = prompt('age?',18);
let message = (vayasu < 10) ? 'Such BABY you are?':
    (vayasu < 18) ? 'You say your an ADULT?, Muthi midha bochu molavale':
        (vayasu < 100) ? 'Salle chala yelle batikav':
            'Man you enjoyed your FUCKING LIFE Man Lived more than "100" years';
alert(message);

// Non - Traditional useage of '?'
let company = prompt('Which company was founded by Rajesh Vulasala?');
(company == 'YJC', company == 'yjc') ? alert('right'): alert('wrong');

// ACTIVITY
/*
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/

let num = prompt("enter the number");
let reply = (num > 0) ? '1':
    (num < 0) ? '-1':
        (num == 0) ? '0':
            'I/P is always a number';
alert(reply);

// LOGICAL OPERATORS

// there are four:
// OR = ||, AND = &&, NOT = !, ?? = Nullish Coalescing.

// OR = ||
//SYNTAX
let result = a || b;
/*
F || F = F
F || T = T
T || F = T
T || T = T
*/
alert(false || false); // false
alert(false || true); // true
alert(true || false); // true
alert(true || true); // true

// most of the time || is used in IF statements
let time = 4;
if ( time < 10 || time > 18){
    alert('YJC is closed');
}else('yjc is open');

// 1. Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// 2. Short-circuit evaluation.
true || alert("not printed");
false || alert("printed");

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// AND = &&
// SYNTAX
result = a && b;
/*
F && F = T
F && T = F
T && F = F
T && T = F
*/
alert(false && false); // true
alert(false && true); // false
alert(true && false); // false
alert(true && true); // false

// EX: with IF
let hour = 16;
let minute = 57;
if(hour == 16 && minute == 57){
    alert("In Three minutes it'll be 17:00.")
}

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
}else{
    alert("This MSG is shown because the result is FALSE")
}
// The AND && operator does the following:
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

// NOT = !
// SYNTAX
result = !value;
// The operator accepts a single argument and does the following:
//    1. Converts the operand to boolean type: true/false.
//    1. Returns the inverse value.
alert( !true ); // false
alert( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

// Nullish coalescing operator '??'
// this is an recent addition to the language
/*
* The nullish coalescing operator is written as two question marks ??.
* As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.
* The result of a ?? b is:
1. if a is defined, then a,
2. if a isn’t defined, then b.
*/

// SYNTAX
result = (a !== null && a !== undefined) ? a : b;

// EX:
 let user;
 alert(user ?? "Here user is undefined")

let users = 'Rajesh';
 alert(users ?? 'Undefined'); // Rajesh ( users is not null/undefined)