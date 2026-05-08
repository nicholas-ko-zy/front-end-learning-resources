# JavaScript

From FreeCodeCamp's JavaScript Certification Course

**Data Types**

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

## Variables

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

### Strings

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

**Bracket Notation**

It's like slicing a string in Python.

```JavaScript
let greeting = "hello";
console.log(greeting[1]); // "e"
```
^ The console will print the character 'e' as a result.

Getting the last character of a string:
```JavaScript
let greeting = "hello";
console.log(greeting[greeting.length - 1]); // "o"
```

To create a new line use `\n` as in "Roses are red,\nViolets are blue..."
```
Roses are red,
Violets are blue...
```

To escape characters like quotes in quotes, use the backslash before the
offending character:
i.e.
```JavaScript
let statement = "She said, \"Hello!\"";
console.log(statement); //
```

**Template Literals and String Interpolation**

You can use template literals, (a backtick) ``` ` ``` in conjunction with string interpolation, which works just like Python's f-string.

Example:
```JavaScript
const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);
// Prints: "Hello, Alice!"
```

If you use template literals across multiple lines, the `console.log()` will print them on new lines.

Example:
```JavaScript
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);

// Prints:
// "Roses are red,
// Violets are blue,
// JavaScript is fun,
// And so are you
```

Template literals also allow you to embed JavaScript expressions in the string, which are evaluated upon you running `console.log(output)`.

Example: 
```JavaScript
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
```

**Finding the position of a substring in a string**

You use the `indexOf()` method. It either returns the index of the first occurence of the substring OR returns `-1` which means the search was unsuccessful.

First arg: Your substring to search for
Second arg: Where to start searching i.e (`10` - the 10th index of your string)

Example:
```JavaScript
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14
```


`prompt()`: A dialogue box, used to get input from the user.

`prompt()` halts the execution of your script, nothing else in your .js file will run further until the user answers the prompts or cancels out of the dialog box...but apparently `prompt()` is generally avoided because of its inconsistent behaviours, not sure what inconsistent behaviours.

**ASCII, `charCodeAt()` and `fromCharCode()`**

ASCII: American Standard Code for Information Interchange, matches the first 128 Unicode characters. A system for encoding characters like letters, digits and symbols into numerical values.

Covers:

* Uppercase and lowercase English letters (A-Z, a-z).
* Numbers (0-9).
* Common punctuation marks and symbols (!, @, #, and so on).
* Control characters (such as newline and tab).

`charCodeAt()`: Gives you the ASCII numeric code for that character.

`fromCharCode()`: Inverse of the above, gives you the character given an ASCII numeric code. 

Examples:
```JavaScript
let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

let char = String.fromCharCode(65);
console.log(char);  //  A
```
"These methods are particularly useful when you need to manipulate or compare characters based on their numeric code values.

For instance, you might use charCodeAt() to check if a character is uppercase, lowercase, or a digit by comparing its ASCII value." - FCC


**`includes()`**: Check if a string contains a substring. Can add a second arg number to specifiy where the search should start.

Example:
```JavaScript
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true
```

**`slice()`**: For extracting a substring from a larger string.

Example:
```JavaScript
let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello
```
- ^ Extracts a string from index 0 to 4, 5 is not inclusive.
- If you omit the second parameter, `slice()` will extract until the end of the string.
- `slice(-x)` extracts counting backwards, i.e. `slice(-4)` extracts the last four characters.

`toUpperCase()`: Converts all characters in a string to uppercase. 

`toLowerCase()`: Same as above, but ouputs only lowercase.

`trim()`: Removes leading and trailing white space.

`trimStart()`: Removes leading white space.

`trimEnd()`: Removes trailing white space.

`replace()`:  Replace parts of a string with another. 

```JavaScript
// Example of using replace()
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"
```
- First arg: Text you want replaced
- Second arg: Replacement text
- `replace()` is case sensitive.
- It will only replace the first occurence of the substring found.
- `replaceAll()` will replace...all, as the method name suggests.

`repeat()`: Used for repeating a string $n$ times.
Example
```JavaScript
let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"
```
- The first parameter, the `count` parameter, must be a non-negative parameter, and floats will be rounded down.

### Numbers

- floats
- ints
- `Infinity`
- `NaN`: Not a Number

**Arithmetic Operators**

- `+`
- `-`
- `*`: Product
- `/`: Division
- `%` returns remainder of division
- `**` exponentiation operator

Remark: Adding a string to a number will result in a concatenated string. i.e. 
```JavaScript
const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string
```

Then for `-`, `*` and `/`, string and number will give you a number. i.e. 
```JavaScript
const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
```

If the string is not a number, then it will ouput `NaN`.

`true` and `false` are treated as `1` and `0` if used with numbers, and strings if used with strings. i.e.
```JavaScript
const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
```

**Operator Precedence**: 

`*` and `\` takes precedence over `+` and `-`.

Associativity: Direction of evaluation, left-to-right or right-to-left.

- Left-to-right: `+` and `*`
- Right-to-left: `=` i.e. `a = b = 5;`, b = 5 then a. Exponent operator also, i.e. `2 ** 3 ** 2;` which is `2 ** 9;`

**Increment and Decrement Operators**
- `++`: `y++` (postfix) means increment, then use. `++y` (prefix) means increment and return inthe same line. 
- `--`

**Compound Assignment**
Shorthand to apply operation then reassign to same variable.

- `+=`: Works just like in Python.
- `-=`
- `*=`
- `/=`
- `%=`
- `**=`
- `&=`
- `|=`

### Booleans

Conditionals 

- (`if/else`)

```JavaScript
let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
}
```

- `==`: Equality operator (relaxed, with type coercion)
```JavaScript
console.log(5 == "5"); // true
```

- `===`: Equality operator (strict, without type coercion)
```JavaScript
console.log(5 === '5'); // false
```

- `!=`
```JavaScript
console.log(5 != "5"); // false
```

- `!==`
```JavaScript
console.log(5 !== "5"); // true
```

Best practice: Use strict inequality and equality operators over the relaxed ones.

**Comparison Operators**
- `>`
- `<`
- `>=`
- `<=`


**Unary Operators**
- Applies a data type change with operators
- Adding the `+` prefix to a string `42` will change it to `42`, same for `-`.
- `!`: Logical NOT operator.
- `~`: Bitwise NOT operator. Inverts the binary representation of numbers. All 1s to 0s and the other way too.
- `void`: Changes type of operand to undefined.
  ```HTML
  <!-- Voids are used in hyperlinks to prevent navigation -->
  <a href="javascript:void(0);">Click Me</a>
  ```

**Bitwise Operators**
- Operators that work on the binary representation of numbers. After it does the bitwise comparison, the  final bit will be turned into a number.
- `&`: AND
  - If both corresponding bits for operands `a` and `b` are `1`, return `1`.
- `|`: OR
  - Returns `1` if either operand's bits positions have `1`.
- `^`: XOR
  - Returns `1` if either oeprand's bits are `1`, but not both `1`.
- `~`: NOT
  - Inversts all bits of its operands
- `<<`: left shift
  - Shifts all bits to the left by a specified number of positions, filing the right most gap with 0s. Effectively multiples by a number $2^{n}$
  ```JavaScript
  let a = 5;  // Binary: 101
  console.log(a << 1);  // 10 (Binary: 1010)
  ```
- `>>`: right shift
  - Shifts all bits to the right by a specified number of positions.Effectively dividing a number by 2

**Conditional Statements**
- Truthy values
  - Non-empty strings
  - Any number other than `0` or `-0`
  - arrays
  - objects
  - `true`, of course
- Falsy values
  - 0
  - `""`
  - `null`
  - `undefined`
  - `NaN`
  - `false`, of course

Ternary operator - compact way to write simple
`if/else` statements.
Example syntax:
```JavaScript
// condition ? expressionIfTrue : expressionIfFalse;

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
```

**Binary Logical Operators**
- `&&`: All must be true
- `||`: At least one is true
- `??`: Called a 'nullish coalsecing operator'. It will return a value only if the first one is `null` or `undefined`. Useful for determining a fallback value. i.e. If the user did not decide a theme, the null -> choose light theme.
  ```JavaScript
  const result = null ?? 'default';
  console.log(result); // default
  ```
- 


