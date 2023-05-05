# JavaScript

#### What is JavaScript?

JavaScript is a scripting language that allows you to implement complex features on web pages. It is a lightweight, interpreted programming language with first-class functions. It is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

#### What is JavaScript used for?

- JavaScript is used to make web pages interactive. It is an essential part of web browsers. The vast majority of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.
- JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.
- JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.

#### Javascript programming structure

- Example

```javascript
<script>// JavaScript statements</script>
```

# Javascript Data Types

- JavaScript variables can hold many data types: numbers, strings, objects and more:
- Example

```javascript
var length = 16; // Number
var lastName = "Johnson"; // String
var x = { firstName: "John", lastName: "Doe" }; // Object
```

# Javascript Variables

- JavaScript variables are containers for storing data values.
- Types of Variables
  - var
  - let
  - const

#### var

- The var keyword declares a variable.
- Example

```javascript
var carName;
```

- The value of carName is undefined, because we have just declared the variable carName, but not assigned a value to it.
- Example

```javascript
var carName = "Volvo";
```

#### let

- The let keyword declares a block scope local variable, optionally initializing it to a value.
- Example

```javascript
let carName;
```

- The value of carName is undefined, because we have just declared the variable carName, but not assigned a value to it.
- Example

```javascript
let carName = "Volvo";
```

#### const

- The const keyword declares a read-only named constant.
- Example

```javascript
const carName = "Volvo";
```

- The value of carName cannot be changed.

# Javascript Operators

- JavaScript has the following types of operators. This section describes the operators and contains information about operator precedence.
- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operators

#### Assignment operators

| Operator | Description                                                      | Example                                     |
| -------- | ---------------------------------------------------------------- | ------------------------------------------- |
| =        | Assigns values from the right side operands to left side operand | C = A + B will assign value of A + B into C |
| +=       | Add AND assignment operator                                      | C += A is equivalent to C = C + A           |
| -=       | Subtract AND assignment operator                                 | C -= A is equivalent to C = C - A           |
| \*=      | Multiply AND assignment operator                                 | C _= A is equivalent to C = C _ A           |
| /=       | Divide AND assignment operator                                   | C /= A is equivalent to C = C / A           |
| %=       | Modulus AND assignment operator                                  | C %= A is equivalent to C = C % A           |
| <<=      | Left shift AND assignment operator                               | C <<= 2 is same as C = C << 2               |
| >>=      | Right shift AND assignment operator                              | C >>= 2 is same as C = C >> 2               |
| >>>=     | Right shift zero fill AND assignment operator                    | C >>>= 2 is same as C = C >>> 2             |
| &=       | Bitwise AND assignment operator                                  | C &= 2 is same as C = C & 2                 |
| ^=       | Bitwise exclusive OR and assignment operator                     | C ^= 2 is same as C = C ^ 2                 |
| \|=      | Bitwise inclusive OR and assignment operator                     | C \|= 2 is same as C = C \| 2               |

#### Comparison operators

| Operator | Description                       | Example                |
| -------- | --------------------------------- | ---------------------- |
| ==       | equal to                          | (A == B) is not true.  |
| ===      | equal value and equal type        | (A === B) is not true. |
| !=       | not equal                         | (A != B) is true.      |
| !==      | not equal value or not equal type | (A !== B) is true.     |
| >        | greater than                      | (A > B) is not true.   |
| <        | less than                         | (A < B) is true.       |
| >=       | greater than or equal to          | (A >= B) is not true.  |
| <=       | less than or equal to             | (A <= B) is true.      |

#### Arithmetic operators

| Operator | Description                  | Example |
| -------- | ---------------------------- | ------- |
| +        | Addition                     | `x + y` |
| -        | Subtraction                  | `x - y` |
| \*       | Multiplication               | `x * y` |
| /        | Division                     | `x / y` |
| %        | Modulus (Division Remainder) | `x % y` |
| ++       | Increment                    | `++x`   |
| --       | Decrement                    | `--x`   |

#### Bitwise operators

| Operator | Description           | Example               |
| -------- | --------------------- | --------------------- |
| &        | AND                   | `5 & 1` (returns 1)   |
| \|       | OR                    | `5 \| 1` (returns 5)  |
| ^        | XOR                   | `5 ^ 1` (returns 4)   |
| ~        | NOT                   | `~ 5` (returns -6)    |
| <<       | Zero fill left shift  | `5 << 1` (returns 10) |
| >>       | Signed right shift    | `5 >> 1` (returns 2)  |
| >>>      | Zero fill right shift | `5 >>> 1` (returns 2) |

#### Logical operators

| Operator | Description | Example               |
| -------- | ----------- | --------------------- |
| &&       | Logical AND | `(A && B)` is true.   |
| \|\|     | Logical OR  | `(A \|\| B)` is true. |
| !        | Logical NOT | `!(A && B)` is false. |

#### String operators

| Operator | Description | Example                                             |
| -------- | ----------- | --------------------------------------------------- |
| +        | Addition    | Concatenates two strings.                           |
| +=       | Assignment  | Concatenates a string to the end of another string. |

#### Conditional (ternary) operator

| Operator | Description | Example                                                                                                          |
| -------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| ?        | Conditional | If the condition is true, the operator returns the value of `expr1`; otherwise, it returns the value of `expr2`. |

#### Comma operator

| Operator | Description | Example                                                                                        |
| -------- | ----------- | ---------------------------------------------------------------------------------------------- |
| ,        | Comma       | Evaluates each of its operands (from left to right) and returns the value of the last operand. |

#### Unary operators

| Operator | Description                                                      | Example                       |
| -------- | ---------------------------------------------------------------- | ----------------------------- |
| delete   | Deletes an object or a property of an object.                    | `delete objectName.property;` |
| typeof   | Returns a string indicating the type of the unevaluated operand. | `typeof "John"`               |
| void     | Evaluates the given expression and then returns undefined.       | `void(expression)`            |

#### Relational operators

| Operator   | Description                                                                               | Example                                                              |
| ---------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| in         | Returns true if the specified property is in the specified object or its prototype chain. | `"PI" in Math` (returns true)                                        |
| instanceof | Returns true if the specified object is of the specified object type.                     | `car instanceof Car` (returns true if `car` is an instance of `Car`) |

# COnditional Statements

- Conditional statements are used to perform different actions based on different conditions.

#### if statement

- The if statement executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
- Example

```javascript
if (condition) {
  // block of code to be executed if the condition is true
}
```

- Example

```javascript
if (time < 20) {
  greeting = "Good day";
}
```

#### if...else statement

- The if...else statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.
- Example

```javascript
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

- Example

```javascript
if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

#### if...else if...else statement

- The if...else if...else statement executes a block of code if a specified condition is true. If the condition is false, another condition is checked. If the second condition is true, a different block of code is executed. If the second condition is false, the next condition is checked, and so on, until the final else statement, which executes a block of code when all other conditions are false.
- Example

```javascript
if (condition1) {
  // block of code to be executed if condition1 is true
} else if (condition2) {
  // block of code to be executed if the condition1 is false and condition2 is true
} else {
  // block of code to be executed if the condition1 is false and condition2 is false
}
```

- Example

```javascript
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

#### switch statement

- The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.
- Example

```javascript
switch (expression) {
  case n:
    // code block
    break;
  case n:
    // code block
    break;
  default:
  // code block
}
```

- Example

```javascript
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

#### The break Keyword

- The break keyword breaks out of the switch block. This will stop the execution of more code and/or case testing inside the block. If break is omitted, the next code block in the switch statement will be executed.
- Example

```javascript
switch (new Date().getDay()) {
  case 4:
    text = "Soon it is Weekend";
    break;
  case 5:
    text = "It is Weekend";
    break;
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

#### The default Keyword

- The default keyword specifies some code to run if there is no case match:
- Example

```javascript
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

# Loops

- Loops offer a quick and easy way to do something repeatedly.

#### for loop

- The for loop has the following syntax:

```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

- Statement 1 is executed (one time) before the execution of the code block.
- Statement 2 defines the condition for executing the code block.
- Statement 3 is executed (every time) after the code block has been executed.
- Example

```javascript
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

#### while loop

- The while loop loops through a block of code as long as a specified condition is true.
- Example

```javascript
while (i < 10) {
  text += "The number is " + i;
  i++;
}
```

#### do...while loop

- The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
- Example

```javascript
do {
  text += "The number is " + i;
  i++;
} while (i < 10);
```

#### for...in loop

- The for...in loop loops through the properties of an object.
- Syntax

```javascript
for (key in object) {
  // code block to be executed
}
```

- Example

```javascript
var person = { fname: "John", lname: "Doe", age: 25 };

var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

#### for...of loop

- The for...of loop loops through the values of an iterable objects.
- Syntax

```javascript
for (variable of object) {
  // code block to be executed
}
```

- Example

```javascript
var cars = ["BMW", "Volvo", "Mini"];

var x;
for (x of cars) {
  document.write(x + "<br >");
}
```

#### The break Keyword

- The break keyword breaks the loop and continues executing the code after the loop (if any):
- Example

```javascript
for (i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "The number is " + i + "<br>";
}
```

#### The continue Keyword

- The continue keyword breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
- Example

```javascript
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
```

#### The label Keyword

- The label provides a statement with an identifier that lets you refer to it elsewhere in your program.
- Example

```javascript
var cars = ["BMW", "Volvo", "Saab", "Ford"];

list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  break list;
  text += cars[2] + "<br>";
  text += cars[3] + "<br>";
}
```

# Functions

- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
- Example

```javascript
function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}
```

#### Function parameters

- Function parameters are listed inside the parentheses () in the function definition.
- Function arguments are the values received by the function when it is invoked.
- Inside the function, the arguments (the parameters) behave as local variables.
- Example

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
```

#### The return Statement

- The function will stop executing when it reaches a return statement.
- If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
- Functions often compute a return value. The return value is "returned" back to the "caller":
- Example

```javascript
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
```

#### Function Invocation

- The code inside the function will execute when "something" invokes (calls) the function:
- Example

```javascript
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
```

#### Function expressions

- A function can also be defined using an expression.
- Example

```javascript
var x = function (a, b) {
  return a * b;
};
```

#### Function Hoisting

- JavaScript functions can be hoisted (named functions).
- Example

```javascript
myFunction(5);

function myFunction(y) {
  return y * y;
}
```
