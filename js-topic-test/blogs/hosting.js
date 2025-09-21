/* 
What is Hoisting in JavaScript?
Hoisting is one of JavaScript's most interesting behaviors. Conceptually, it looks like JavaScript moves variable and function declarations to the top of their scope before the code runs, but in reality this happens behind the scenes during code processing.
JavaScript processes your code in two main phases. First comes the Creation Phase, where it scans through your code and sets up memory space for all variables and functions it finds. For variables declared with var, JavaScript creates them in memory and initializes them with undefined. For function declarations, it stores the entire function definition in memory.
Next is the Execution Phase, where JavaScript runs your code line by line. When it reaches the actual assignment line in your code, it replaces the initial undefined value with the assigned one. When it encounters function calls, it executes those functions using the definitions stored during the creation phase.
This two-phase process explains why variables declared with var can be accessed before their declaration appears in your code. If you try to use a var variable before declaring it, you'll get undefined instead of an error. This happens because the variable exists in memory (it was hoisted), but its value hasn't been assigned yet.
Variables declared with let and const are also hoisted, but they stay in a "Temporal Dead Zone" (TDZ) from the start of the scope until the actual line of declaration. Accessing them during this period throws a ReferenceError.
console.log(a); // undefined
console.log(c); // ReferenceError: Cannot access 'c' before initialization
var a = 10;
let c = 20;
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
function demonstrateVarHoisting() {
    console.log(message); // undefined (hoisted but not initialized)
    var message = "Hello, world!";
    console.log(message); // "Hello, world!" (after assignment)
}
demonstrateVarHoisting();
function demonstrateLetConstHoisting() {
    try {
        console.log(name); // ReferenceError: Cannot access 'name' before initialization
    } catch (error) {
        console.log("Error caught: accessing variable in TDZ");
    }
    let name = "John";
}
demonstrateLetConstHoisting();
Regular function declarations (written as function myFunction(){}) are fully hoisted with their implementation. This means you can call these functions before they appear in your code, and they'll work perfectly.
sayHello(); // Works because function declarations are fully hoisted
function sayHello() {
    console.log("Hello from hoisted function!");
}
Function expressions (e.g., var myFunction = function(){}) are different. Only the variable name (myFunction) is hoisted and initialized with undefined. The function itself isn't assigned until execution reaches that line. If you try to call such a function before its definition, you'll get an error saying it's not a function.
try {
    sayGoodbye(); // Error: sayGoodbye is not a function
} catch (error) {
    console.log("Error caught: function expression not hoisted");
}
var sayGoodbye = function () {
    console.log("Goodbye!");
};
Understanding hoisting helps you avoid unexpected bugs and write more predictable code.

*/