Implement a function that converts dates into an array of human-readable English strings. Each date is represented by an array [2001, 10, 18], where the first element is the year, the second is the month, and the third is the date. The function should accept any number of parameters. If nothing is passed to the function, it should return an empty array. Export the function by default.

**Examples**

```javascript
convert();
// []

convert([1993, 4, 24]);
// ['Sat Apr 24 1993']

convert([1993, 4, 24], [1997, 9, 12], [2001, 11, 18]);
// ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
```
