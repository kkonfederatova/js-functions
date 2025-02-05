The goal of this task is to learn how to separate clean code from code with side effects.

To do this, separate the process of determining whether a number is prime into a separate function that returns a boolean value. This is the function with which we separate clean code from the code that prints the result 'yes' or 'no' to the screen depending on the boolean value.

An example of such separation and good abstractions is in the teacher's solution.

Implement the necessary functions and export by default a function that takes a number for primeness and prints to the screen yes if the number is prime or no if it is not.

**Examples**

```javascript
sayPrimeOrNot(5); // 'yes'
sayPrimeOrNot(4); // 'no'
```
