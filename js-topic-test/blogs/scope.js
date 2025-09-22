/* 
Scope in JavaScript
Scope is the area where variables and functions can be accessed in your code. Think of it as the "reach" of your variables - where they can be seen and used. Outside this scope, you cannot access them.
There are three main types of scope in JavaScript. The first one is global scope. The second one is function scope. The third one is block scope.
The global scope is like a public area that everyone can access. Variables and functions defined here can be used anywhere in your code.
let message = "Hello World"; // Global variable

function sayHello() {
  console.log(message); // Can access the global variable
}
Function scope means variables created inside a function can only be used within that function. They are born when the function runs and disappear when it finishes.
function createMessage() {
  let message = "Hello from function"; // Function-scoped variable
  console.log(message); // Works fine
}

createMessage();
// console.log(message); // Error! Cannot access outside the function
Block scope refers to variables that only exist inside code blocks (anything inside curly braces {} like if statements, loops, etc.). Only variables declared with 'let' and 'const' have block scope. Variables declared with 'var' do not have block scope.
if (true) {
  let blockVariable = "I'm in a block"; // Block-scoped
  var notBlockVariable = "I'm not limited to the block";
}

// console.log(blockVariable); // Error! Cannot access
console.log(notBlockVariable); // Works fine
JavaScript also has lexical scoping, which describes how nested functions can access variables from their parent functions. Child functions can access their parent's variables, but parent functions cannot access their children's variables.
function parent() {
  let parentVar = "I'm the parent";
  
  function child() {
    console.log(parentVar); // Child can access parent's variable
    let childVar = "I'm the child";
  }
  
  child();
  // console.log(childVar); // Error! Parent cannot access child's variable
}
Understanding scope helps you write better code and avoid unexpected behavior in your programs.
*/