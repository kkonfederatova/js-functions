Implement the body of the smallestDivisor() function using an iterative process. The function must find the smallest divisor of a given number. The number passed to the function is greater than zero.

Additional condition: the divisor must be greater than one, except when the argument is one (whose smallest divisor is also one).

For example, the smallest divisor of 15 is 3.

```javascript
smallestDivisor(15); // 3
smallestDivisor(17); // 17
```

Algorithm idea:

1. Try dividing a number by 2
2. If the number is divisible without a remainder, then it is the smallest divisor
3. If not, then try the next divisor
4. If nothing divides the number without a remainder, then the given number is prime, so its smallest divisor is itself (not counting 1)
