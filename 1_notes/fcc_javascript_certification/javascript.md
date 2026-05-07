# JavaScript

From FreeCodeCamp's JavaScript Certification Course

**Date Types**

- `Number`: Reps. both integers and floating-point values.
- `String`: Can use both double `"` and single `'` quotes.
- `Boolean`: i.e. `true`, `false`
- `undefined`: Undeclared variables, not yet given a value
- `null`: Variables that have been intetionally set to nothing.
- `Object`: Collection of key-value pairs, looks like a Python dictionary.
  ```JavaScript
  {
  name: "Alice",
  age: 30
  };
  ```
- `Symbol`: Unique values that cannot be changed. Used to create unique labels or identifiers for properties.
  ```JavaScript
  Symbol('mySymbol')
  ```
- `BigInt`: Used for large numbers that exceed the limit of `Number`

**Variables**

Use `let` to declare a variable. Can reassign, but cannot redeclare.

```JavaScript
let age = 25;
age = 30;
```
^ In the example above, intial declaration gives `age` a value of `25`, the `age` is reassinged to `30`.

Javascript uses CamelCase for its primary naming convetion. And you cannot start a variable name with a number.

Keywords to avoid for variable names in Javascript:
- `let`
- `const`
- `function`
- `return`

**`let` and `const` for variable declaration**

`let`: For declaring variables that can be reassigned but not redeclared later (within the same scope) on 

`const`: For declaring variables that you don't want reassigned and cannot be redeclared. If you try to reassign a `const`, JavaScript will throw you an error. And `const` cannot be left undefined like `let` declared variables.

```JavaScript
const maxScore = 100;
```

**`Strings`**

- Strings are immutable, cannot update a string, can only reassign a string variable to another string.

- To concatenate a string you can use 
  - `+`: `let fullName = firstName + " " + lastName; `
  - `+=`: `greeting += ', John!';`
  - `concat()`: `let result = str1.concat(' ', str2);`
  

`.console.log()`

A tool to display messages, output information to the browser's console.

Example of passing multiple values through `console.log()`
```JavaScript
console.log("Name:", name, "Age:", age); // Name: Alice Age: 25
```

**JS as a dynamically types language**

Since JS is dynamically typed, you don't need to specify the data type upon declaration.

So you can reassign variables without worrying about it's data type. 

`typeof`: Like Python's `type()` function, to inspect the data type of the variable. A well known quirk is that null types will return the string `"object"` when you apply a `typeof` function to it.

```JavaScript
console.log(typeof x);
```

**Comments**

```JavaScript
// Single-line comment

/*
This is
a multi-line
comment.
*/
```

