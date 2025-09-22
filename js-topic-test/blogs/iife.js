/**
Immediately Invoked Function Expressions(IIFE)
(() => { … })()
IIFE is a technique where we create a function and execute it immediately in one step, instead of defining it first and then calling it separately. Since the whole function is inside the first set of brackets, it becomes an expression rather than a statement.
We can write the inside function with or without a name. We can also create a private function this way. Using an IIFE, we can avoid creating global variables or functions. In an IIFE, defined functions or variables do not conflict with other variables or functions, even if they have the same name. Other pros are maintaining and organizing code in JavaScript.
const sumAB = (function sumAB(a, b) {
 return a + b;
})(10, 2); //12
If you console.log(sumAB), you will get the result immediately.
Also, even though the function is named sumAB, using the same variable name sumAB outside does not cause any error because the function name is scoped only inside the IIFE.
const hello = (function getHello() {
 return 'Hello';
})();
In this example, you cannot access getHello from outside. It is only available inside this IIFE function.
for (var i = 1; i <= 5; i++) {
 setTimeout(() => console.log(i), 1000);
}
Here, you will get the value 6 for all logs because var is function-scoped. When the timeout runs after 1000 ms, the loop has already finished, and the value of i is 6.
for (var i = 1; i <= 5; i++) {
 (function (i) {
  setTimeout(() => console.log(i), 1000);
 })(i);
}
We can solve the problem by using an IIFE to "lock" or capture the current value of i. If we use let in the for loop instead of var, it will also solve the problem because let is block-scoped.
 */