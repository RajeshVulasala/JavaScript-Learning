// DAY 4
/*
* Loops: While and For
* The "Switch" Statement
*/

// LOOPS:
// WHILE loop
// SYNTAX
/* while (condition){ // while the condition is true
    // code
    // loop body // --> then here the body is executed
} */
// EXAMPLE
let i = 0;
while(i<3){
    console.log(i);
    i++; // if the increment/ decrement is missed then loop will be traped in it
}

// DO WHILE
// SYNTAX
do{
    // loop body
} while (condition);
// EXAMPLE
let i1 = 0;
do{
    console.log(i);
    i++;
} while(i<3);
// used only when we want the loop body has to run atleast one time.

// FOR loop
// it is the most commonly used loop
// when we know how many times the loop has to run then we choose for loop\
//SYNTAX:
for(begin; coniditon; step(increment/decrement)){
    // loop body
}

// Example
for (let r = 0; r<6; r++){
    console.log(r);
}
/*
* begin = let r = 0 --> Executes once upon entering the loop.
* condition = r<6 -->Checked before every loop iteration. If false, the loop stops.
* body = console.log(r) --> Runs again and again while the condition is truthy.
* step = i++ --> 	Executes after the body on each iteration.
*/

// ALGORITHM
/*
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
*/

// IN LINE VARIABLES
let a = 0;
for(a = 0; a < 3; a++){
    console.log(a);
}
console.log(a); // this gives an reffarence variable error

// SKIPING PARTS OF FOR
// any part of FOR can be skipped.
// SKIP begin
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
    alert( i ); // 0, 1, 2
}

// Skip step and Begin
let i = 0;

for (; i < 3;) {
    alert( i++ );
}

// Skiping whole loop parts
for (;;) {
    // repeats without limits
} // --> it creates an infinite loop

// Breaking the loop
/*
Normally, a loop exits when its condition becomes falsy.
But we can force the exit at any time using the special break directive.
*/
// EX:
let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value; // sum = sum + value

}
alert( 'Sum: ' + sum );

// Continue to the next iteration

for (let i = 0; i<10; i++){
    if(i%2 == 0)continue;
    console.log(i);
}

// NESTED LOOPS
for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');

// The "switch" statement

// A switch statement can replace multiple if checks.
// It gives a more descriptive way to compare a value with multiple variants
// SYNTAX:
/*
switch(x) {
    case 'value1':  // if (x === 'value1')
    ...
        [break]

    case 'value2':  // if (x === 'value2')
    ...
        [break]

    default:
    ...
        [break]
}
*/
// EX:
let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}

// BREAK
// If there is no break then the execution continues with the next case without any checks.

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
    case 4:
        alert( 'Exactly!' );
    case 5:
        alert( 'Too big' );
    default:
        alert( "I don't know such values" );
}

// Any expression can be a switch/case argument
// EX:
let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        alert("this doesn't run");
}

// Grouping of “case”
// in several variants of case which share the same code can be grouped.
// EX:
let a = 3;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}

// type of the data is very importent
// EX:
let arg = prompt("Enter a value?");
switch (arg) {
    case '0':
    case '1':
        alert( 'One or zero' );
        break;

    case '2':
        alert( 'Two' );
        break;

    case 3:
        alert( 'Never executes!' );
        break;
    default:
        alert( 'An unknown value' );
}

/*
→ For 0, 1, the first alert runs.
→ For 2 the second alert runs.
→ But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.
*/