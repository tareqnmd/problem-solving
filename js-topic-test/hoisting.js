// Example 1: Variable hoisting with 'var'
function demonstrateVarHoisting() {
    console.log(message); // undefined (hoisted but not initialized)
    var message = "Hello, world!";
    console.log(message); // "Hello, world!" (after assignment)
}
demonstrateVarHoisting();

// Example 2: Function declarations are hoisted completely
sayHello(); // Works because function declarations are fully hoisted
function sayHello() {
    console.log("Hello from hoisted function!");
}

// Example 3: Function expressions are not hoisted
try {
    sayGoodbye(); // Error: sayGoodbye is not a function
} catch (error) {
    console.log("Error caught: function expression not hoisted");
}
var sayGoodbye = function () {
    console.log("Goodbye!");
};

// Example 4: 'let' and 'const' are hoisted but not initialized (TDZ)
function demonstrateLetConstHoisting() {
    try {
        console.log(name); // ReferenceError: Cannot access 'name' before initialization
    } catch (error) {
        console.log("Error caught: accessing variable in TDZ");
    }
    let name = "John";
}
demonstrateLetConstHoisting();

// Example 5: Global vs local scope with implicit global variables
function createGlobalVariable() {
    globalVar = 10; // Creates a global variable (no declaration)
    let localVar = 50; // Creates a local variable
}
createGlobalVariable();

console.log(globalVar); // 10 (accessible globally)
try {
    console.log(localVar); // ReferenceError: localVar is not defined
} catch (error) {
    console.log("Error caught: local variable not accessible");
}