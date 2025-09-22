/**
Scope is the area where function and variable are called accessible. Outside this scope you cannot access them. There are mainly three types of scope in javascript.
1. Global Scope
2. Function Scope
3. Block Scope

Global Scope: The global scope is the outermost scope. It is accessible from anywhere in the code.

Function Scope: The function scope is the scope of the function. It is accessible from within the function. function scope is created when function is called.

Block Scope: The block scope is the scope of the block. It is accessible from within the block. block scope created inside {} like if, for, while, do-while, switch, etc. only let and const have block scope. var does not have block scope.

There are another one which is called lexical scoping. Lexical scoping mainly a relation between parent child function. child function can access the parent function variables but parent function cannot access the child function variables.
 */