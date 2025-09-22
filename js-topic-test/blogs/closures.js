/**
A Story of Closures in JavaScript
In JavaScript, a function can always remember values from the place where it was created - even after that outer code has finished running. This behavior is called a closure.
Closure is the default behavior in Javascript, where an inner function can access variables, functions or objects from its outer function. Even after the outer function finishes execution, the inner function still has access to the outer function scope. This is called lexical scoping. Variables inside a function are private and can only be accessed through the functions it returns.
function counter() {
  let count = 0;
  return () => ++count;
}

const inc = counter();

console.log(inc()); // 1
console.log(inc()); // 2
Here we have a function with a variable count. It returns another function that increments and uses the parent variable count. Each time you call the inc function, it updates the parent variable and returns the new value on the next call.
function outer() {
  const x = 2;
  function inner() {
    const y = 3;
    return x + y;
  }
  return inner;
}

const oneLineExec = outer()();
console.log(oneLineExec); //5

const outerExec = outer();
const innerExec = outerExec();
console.log(innerExec); //5
In the above example, outer is the parent function and inner is the child function. The parent function returns the child function. Even after the parent function finishes execution, the child function can still access the parent's variable.
We can run it directly in one line using outer()().
Or, we can store the returned function in a variable and call it later - since functions in JavaScript can be stored in variables. Both ways give the same result.
function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const multiplyBySeven = multiply(7);
const multiplyByFive = multiplyBySeven(5);
const multiplyBySix = multiplyBySeven(6);
const multiplyByFourAndSix = multiply(4)(6);

console.log(multiplyByFive); //35
console.log(multiplyBySix); //42
console.log(multiplyByFourAndSix); //24;
In this example, we create a multiply function that returns another function. When we store multiply(7) in multiplyBySeven, it remembers the value 7. We can then call it with different numbers like 5 and 6 to get new results (35 and 42).
We can also call it directly in one line like multiply(4)(6) which gives 24.
This shows how closures let a function "remember" values from its parent function, even after the parent has finished running.
And that's it for today. I think this clears up the confusion about what a closure does.
 */