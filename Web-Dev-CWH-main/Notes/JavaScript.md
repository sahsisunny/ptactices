# Java Script

# What is JavaScript?
- JavaScript is a scripting language that allows you to implement complex features on web pages. It is a lightweight, interpreted programming language with first-class functions. It is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
- JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.
- JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded. The standard for JavaScript is ECMAScript. As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.
- JavaScript engines were originally used only in web browsers, but they are now embedded in many other types of host software, including server-side in web servers and databases, and in non-web programs such as word processors and PDF software, and in runtime environments that make JavaScript available for writing mobile and desktop applications, including desktop widgets. JavaScript engines are also embedded in many game engines, including the Unity game engine, the Unreal Engine, and the CryEngine. JavaScript engines are also embedded in many game engines, including the Unity game engine, the Unreal Engine, and the CryEngine.

# What is JavaScript used for?
- JavaScript is used to make web pages interactive. It is an interpreted programming language with object-oriented capabilities. It is used to make web pages interactive and provide online programs, including video games. The programs in this language are called scripts. They can be written directly in a web page's HTML, or they can be contained in their own files. JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!

# Advantages of JavaScript
## The Advantages of JavaScript
- **Less server interaction** - You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.
- **Immediate feedback to the visitors** - They don't have to wait for a page reload to see if they have forgotten to enter something.
- **Increased interactivity** - You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.
- **Richer interfaces** - You can use JavaScript to include such items as drag-and-drop components and sliders to give a rich interface to your site visitors.
- **Better navigation** - You can create interfaces that allow visitors to pull up menus, or to pop up additional windows for browsing.

## The Disadvantages of JavaScript
- **Client-side JavaScript does not allow the reading or writing of files.** This has been kept for security reasons. You cannot use JavaScript to read, manipulate, or save text files, binary files, or data in any other format locally on the user's computer. This is very limiting for many applications.
- **JavaScript doesn't have any multi-threading capabilities.** This means that you cannot take advantage of multi-core systems with a single JavaScript application.
- **JavaScript doesn't have any memory management or garbage collection capabilities.** This means that you cannot create memory leaks, but you also cannot control memory usage or force collection of unused objects.

# JavaScript development tools
- **Node.js** - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
- **Visual Studio Code** - Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.
- **Atom** - Atom is a free and open-source text and source code editor for macOS, Linux, and Microsoft Windows with support for plug-ins written in Node.js, and embedded Git Control, developed by GitHub. Atom is a desktop application built using web technologies. Most of the basic editing features are provided by packages that can be enabled, disabled, and configured through the Settings View.
- **Sublime Text** - Sublime Text is a proprietary cross-platform source code editor with a Python application programming interface (API). Sublime Text uses a custom GUI toolkit, optimized for speed and beauty, while taking advantage of native functionality on each platform. Sublime Text is written in C++ and Python. It natively supports many programming languages and markup languages, and functions can be added by users with plugins, typically community-built and maintained under free-software licenses.
- **Brackets** - Brackets is a free and open-source text editor for web design. It is written in HTML, CSS, and JavaScript, and runs on Adobe's Brackets shell. Brackets is based on the open-source project CodeMirror2 and is developed by Adobe Systems. Brackets is a lightweight, yet powerful, modern text editor. We blend visual tools into the editor so you get the right amount of help when you want it. With new features and extensions released every 3-4 weeks, it's like getting presents all year long.
- **Notepad++** - Notepad++ is a free source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GPL License. Based on the powerful editing component Scintilla, Notepad++ is written in C++ and uses pure Win32 API and STL which ensures a higher execution speed and smaller program size. By optimizing as many routines as possible without losing user friendliness, Notepad++ is trying to reduce the world carbon dioxide emissions. When using less CPU power, the PC can throttle down and reduce power consumption, resulting in a greener environment.
- **WebStorm** - WebStorm is a cross-platform integrated development environment (IDE) for web development. It is developed by JetBrains, and is available as an evaluation version, a free community edition, and a paid license. WebStorm provides code completion, on-the-fly error detection, and automated refactorings for JavaScript, TypeScript, CSS, SCSS, HTML, and other web technologies. It also supports Node.js, NPM, and Bower. WebStorm is available for Windows, macOS, and Linux.

# Example of JavaScript
```javascript
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript in Head</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
</script>

</body>
</html>
```
# Comments in JavaScript
- Single-line comments start with two forward slashes (//) and end at the end of the line.
- Multi-line comments start with /* and end with */.
- Example:
```javascript
// This is a single-line comment

/* This is a
multi-line comment */
```

# JavaScript Variables
#### Types of Variables in JavaScript
- **var** - Declares a variable, optionally initializing it to a value.
- **let** - Declares a block scope local variable, optionally initializing it to a value.
- **const** - Declares a block scope read-only named constant.

#### var
- The var keyword declares a variable. If a declared variable is not initialized, it has the value undefined.
- Example:
```javascript
var x;
var y = 5;
```

#### let
- The let statement declares a block scope local variable, optionally initializing it to a value.
- Example:
```javascript
let x;
let y = 5;
```

#### const
- The const statement declares a read-only named constant. You must initialize a constant when you declare it. A constant cannot change value through re-assignment, and it can't be redeclared.
- Example:
```javascript
const PI = 3.141592653589793;
```

#### var vs let vs const
| var | let | const |
| --- | --- | --- |
| Variables declared with the var keyword are scoped to the function in which they are declared. | Variables declared with the let keyword are scoped to the block in which they are declared. | Variables declared with the const keyword are scoped to the block in which they are declared. |
| Variables declared with the var keyword are initialized with undefined. | Variables declared with the let keyword are not initialized. | Variables declared with the const keyword are not initialized. |
| Variables declared with the var keyword can be updated and re-declared within its scope. | Variables declared with the let keyword can be updated but not re-declared. | Variables declared with the const keyword can neither be updated nor re-declared. |
| Variables declared with the var keyword are hoisted to the top. | Variables declared with the let keyword are hoisted to the top. | Variables declared with the const keyword are hoisted to the top. |
| Variables declared with the var keyword are accessible from anywhere within its scope. | Variables declared with the let keyword are accessible only within its block. | Variables declared with the const keyword are accessible only within its block. |


# JavaScript Operators
- **Assignment operators** - Assign values to JavaScript variables.
- **Comparison operators** - Compare two values.
- **Arithmetic operators** - Perform arithmetic operations on numbers.
- **Bitwise operators** - Manipulate numbers in their binary representation.
- **Logical operators** - Determine the logic between variables or values.
- **special operators** - Special operators in JavaScript.


#### Assignment operators
| Operator | Description | Example |
| --- | --- | --- |
| = | Assigns a value to a variable | x = y |
| += | Adds a value to a variable | x += y |
| -= | Subtracts a value from a variable | x -= y |
| *= | Multiplies a variable by a value | x *= y |
| /= | Divides a variable by a value | x /= y |
| %= | Divides a variable by a value and returns the remainder | x %= y |
| **= | Raises a variable to a power | x **= y |

#### Comparison operators
| Operator | Description | Example |
| --- | --- | --- |
| == | Equal to | x == y |
| === | Equal value and equal type | x === y |
| != | Not equal | x != y |
| !== | Not equal value or not equal type | x !== y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| <= | Less than or equal to | x <= y |
| ? | Ternary operator | condition ? value1 : value2 |

#### Arithmetic operators
| Operator | Description | Example |
| --- | --- | --- |
| + | Addition | x + y |
| - | Subtraction | x - y |
| * | Multiplication | x * y |
| / | Division | x / y |
| % | Modulus (Division Remainder) | x % y |
| ++ | Increment | ++x |
| -- | Decrement | --x |

#### Bitwise operators
| Operator | Description | Example |
| --- | --- | --- |
| & | AND | x & y |
| \| | OR | x \| y |
| ^ | XOR | x ^ y |
| ~ | NOT | ~x |
| << | Zero fill left shift | x << y |
| >> | Signed right shift | x >> y |
| >>> | Zero fill right shift | x >>> y |

#### Logical operators
| Operator | Description | Example |
| --- | --- | --- |
| && | Logical AND | x && y |
| \|\| | Logical OR | x \|\| y |
| ! | Logical NOT | !x |

#### Special operators
| Operator | Description | Example |
| --- | --- | --- |
| new | Creates an instance of a user-defined object type or of one of the built-in object types that has a constructor function | var x = new Object(); |
| delete | Removes a property from an object | delete x; |
| typeof | Returns a string indicating the type of the unevaluated operand | typeof x; |
| instanceof | Returns true if the specified object is of the specified object type | x instanceof y; |
| in | Returns true if the specified property is in the specified object or its prototype chain | x in y; |
| void | Evaluates the given expression and then returns undefined | void x; |
| (:? :) | Ternary operator | condition ? value1 : value2; |
| , | Comma operator | x, y; |
| yeild | Pauses and resumes a generator function | yeild x; |


# JavaScript Data Types
- **Primitive data types** - Primitive data types are data types that are not objects and have no methods.
- **Complex data types** - Complex data types are data types that are objects and have methods.

#### Primitive data types
| Data type | Description | Example |
| --- | --- | --- |
| String | A sequence of characters | "John Doe" |
| Number | An integer or floating point number | 123 or 3.14 |
| Boolean | A logical entity either true or false | true or false |
| Undefined | A variable that has not been assigned a value | undefined |
| Null | A special keyword denoting a null value | null |

#### Complex data types
| Data type | Description | Example |
| --- | --- | --- |
| Object | A collection of data | {name:'John', age:34} |
| Array | A list of data | ['John', 34] |
| Function | A block of code designed to perform a particular task | function myFunction() {return true;} |

# JavaScript Conditions and Loops
- **If statement** - Executes a block of code if a specified condition is true.
- **If...else statement** - Executes a block of code if a specified condition is true. Otherwise, another block of code is executed.
- **If...else if...else statement** - Executes different code blocks based on different conditions.
- **Switch statement** - Evaluates an expression and executes a block of code depending on the value of the expression.
- **For loop** - Loops through a block of code a number of times.
- **For...in loop** - Loops through the properties of an object.
- **For...of loop** - Loops through the values of an iterable object.
- **While loop** - Loops through a block of code while a specified condition is true.
- **Do...while loop** - Loops through a block of code while a specified condition is true.

#### If statement
- The if statement executes a block of code if a specified condition is true.
```javascript
if (condition) {
  // code block to be executed if the condition is true
}
```
- **Example**
```javascript
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

#### If...else statement
- The if...else statement executes a block of code if a specified condition is true. Otherwise, another block of code is executed.
```javascript
if (condition) {
  // code block to be executed if the condition is true
} else {
  // code block to be executed if the condition is false
}
```
- **Example**
```javascript
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else {
  greeting = "Good day";
}
```

#### If...else if...else statement
- The if...else if...else statement executes a block of code if a specified condition is true. Otherwise, another block of code is executed.
```javascript
if (condition1) {
  // code block to be executed if condition1 is true
} else if (condition2) {
  // code block to be executed if the condition1 is false and condition2 is true
} else {
  // code block to be executed if the condition1 is false and condition2 is false
}
```
- **Example**
```javascript
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

#### Switch statement
- The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.

```javascript
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
- **Example**
```javascript
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

#### For loop
- The for loop is used to loop through a block of code a number of times.
```javascript
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```
- **Example**
```javascript
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

#### For...in loop
- The for...in loop loops through the properties of an object.
```javascript
for (key in object) {
  // code block to be executed
}
```
- **Example**
```javascript
var person = {fname:"John", lname:"Doe", age:25};
var text = "";
var x;
for (x in person) {
  text += person[x];
}
```

#### For...of loop
- The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
```javascript
for (variable of object) {
  // code block to be executed
}
```
- **Example**
```javascript
var cars = ["BMW", "Volvo", "Mini"];
var x;
for (x of cars) {
  document.write(x + "<br>");
}
```

#### While loop
- The while loop loops through a block of code as long as a specified condition is true.
```javascript
while (condition) {
  // code block to be executed
}
```
- **Example**
```javascript
var i = 0;
var text = "";
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
```

#### Do...while loop
- The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

```javascript
do {
  // code block to be executed
}
while (condition);
```
- **Example**
```javascript
var i = 0;
var text = "";
do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 10);
```

# JavaScript Functions
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).
- **Example**
```javascript
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```
- **Example**
```javascript
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
document.getElementById("demo").innerHTML = toCelsius(77);
```

# Types of Functions
- User-defined functions
- Built-in functions
- Anonymous functions

#### User-defined functions
- A JavaScript function defined by the user.
- **Example**
```javascript
function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}
```
- The above example defines a function named myFunction, which takes two parameters, p1 and p2, and returns the product of the two parameters.

#### Built-in functions
- A JavaScript function that is built into the browser.
- **Example**
```javascript
var x = Number.MAX_VALUE;
```
- The above example uses the MAX_VALUE property of the Number object to find the highest possible value in JavaScript.

#### Anonymous functions
- A JavaScript function without a name.
- **Example**
```javascript
var x = function (a, b) {return a * b};
```
- The above example uses a function expression to create a function that returns the product of two numbers.


# Concatenating Strings in JavaScript
- The + operator can be used to concatenate (join) strings.
- **Example**
```javascript
var text1 = "John";
var text2 = "Doe";
var text3 = text1 + " " + text2;
```


# Array in JavaScript
- An array is a special variable, which can hold more than one value at a time.
- If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:
```javascript
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
```
- However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
- The solution is an array!
- An array can hold many values under a single name, and you can access the values by referring to an index number.
- **Example**
```javascript
var cars = ["Saab", "Volvo", "BMW"];
```
- **Example**
```javascript
var cars = new Array("Saab", "Volvo", "BMW");
```

#### Accessing the Elements of an Array
- Array elements are accessed using their index number: arrayName[index].
- **Example**
```javascript
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];
```
#### Array functions
| Function | Description | Example |
| --- | --- | --- |
| Array.isArray() | Checks whether an object is an array | `Array.isArray([1, 2, 3]);` | 
| Array.from() | Creates a new array from an object | `Array.from("foo");` |
| Array.of() | Creates a new array from a variable number of arguments | `Array.of(7);` |
| Array.prototype.concat() | Joins two or more arrays, and returns a copy of the joined arrays | `var alpha = ["a", "b", "c"];`<br>`var numeric = [1, 2, 3];`<br>`alpha.concat(numeric);` |
| Array.prototype.copyWithin() | Copies array elements within the array, to and from specified positions | `var array1 = ["a", "b", "c", "d", "e"];`<br>`array1.copyWithin(0, 3, 4);` |
| Array.prototype.entries() | Returns a key/value pair Array Iteration Object | `var array1 = ["a", "b", "c"];`<br>`var iterator1 = array1.entries();` |
| Array.prototype.every() | Checks if every element in an array pass a test | `var ages = [32, 33, 16, 40];`<br>`function checkAdult(age) {`<br>`  return age >= 18;`<br>`}`<br>`ages.every(checkAdult);` |
| Array.prototype.fill() | Fill the elements in an array with a static value | `var array1 = [1, 2, 3, 4];`<br>`array1.fill(0, 2, 4);` |
| Array.prototype.filter() | Creates a new array with every element in an array that pass a test | `var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];`<br>`const result = words.filter(word => word.length > 6);` |
| Array.prototype.find() | Returns the value of the first element in an array that pass a test | `var array1 = [5, 12, 8, 130, 44];`<br>`var found = array1.find(element => element > 10);` |
| Array.prototype.findIndex() | Returns the index of the first element in an array that pass a test | `var array1 = [5, 12, 8, 130, 44];`<br>`var found = array1.findIndex(element => element > 10);` |
| Array.prototype.forEach() | Calls a function for each array element | `var txt = "";`<br>`var numbers = [45, 4, 9, 16, 25];`<br>`numbers.forEach(myFunction);`<br>`function myFunction(value, index, array) {`<br>`  txt = txt + value + "<br>";`<br>`}` |
| Array.prototype.includes() | Checks if an array contains the specified element | `var array1 = [1, 2, 3];`<br>`array1.includes(2);` |
| Array.prototype.indexOf() | Search the array for an element and returns its position | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.indexOf("Apple");` |
| Array.prototype.join() | Joins all elements of an array into a string | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.join("*");` |
| Array.prototype.keys() | Returns a Array Iteration Object, containing the keys of the original array | `var array1 = ["a", "b", "c"];`<br>`var iterator = array1.keys();` |
| Array.prototype.lastIndexOf() | Search the array for an element, starting at the end, and returns its position | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.lastIndexOf("Apple");` |
| Array.prototype.map() | Creates a new array with the result of calling a function for each array element | `var numbers = [4, 9, 16, 25];`<br>`var x = numbers.map(Math.sqrt);` |
| Array.prototype.pop() | Removes the last element of an array, and returns that element | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.pop();` |
| Array.prototype.push() | Adds new elements to the end of an array, and returns the new length | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.push("Kiwi");` |
| Array.prototype.reduce() | Reduce the values of an array to a single value (going left-to-right) | `var numbers = [175, 50, 25];`<br>`var sum = numbers.reduce(myFunc);`<br>`function myFunc(total, num) {`<br>`  return total - num;`<br>`}` |
| Array.prototype.reduceRight() | Reduce the values of an array to a single value (going right-to-left) | `var numbers = [175, 50, 25];`<br>`var sum = numbers.reduceRight(myFunc);`<br>`function myFunc(total, num) {`<br>`  return total - num;`<br>`}` |
| Array.prototype.reverse() | Reverses the order of the elements in an array | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.reverse();` |
| Array.prototype.shift() | Removes the first element of an array, and returns that element | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.shift();` |
| Array.prototype.slice() | Selects a part of an array, and returns the new array | `var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];`<br>`var citrus = fruits.slice(1, 3);` |
| Array.prototype.some() | Checks if any of the elements in an array pass a test | `var ages = [3, 10, 18, 20];`<br>`function checkAdult(age) {`<br>`  return age >= 18;`<br>`}`<br>`ages.some(checkAdult);` |
| Array.prototype.sort() | Sorts the elements of an array | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.sort();` |
| Array.prototype.splice() | Adds/Removes elements from an array | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.splice(2, 0, "Lemon", "Kiwi");` |
| Array.prototype.toLocaleString() | Converts an array to a string, and returns the result | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.toLocaleString();` |
| Array.prototype.toString() | Converts an array to a string, and returns the result | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.toString();` |
| Array.prototype.unshift() | Adds new elements to the beginning of an array, and returns the new length | `var fruits = ["Banana", "Orange", "Apple", "Mango"];`<br>`fruits.unshift("Lemon","Pineapple");` |
| Array.prototype.values() | Returns a Array Iteration Object, containing the values of the original array | `var array1 = ["a", "b", "c"];`<br>`var iterator = array1.values();` |



# Java Script Events

#### 1. UI Events

| UI Event | Description | Example | 
| :--- | :--- | :--- |
| onload | An HTML web page has finished loading | `window.onload = function() {`<br>`  alert("The page has loaded");`<br>`}` |
| onunload | The user exits the page | `window.onunload = function() {`<br>`  alert("The page has unloaded");`<br>`}` |
| onabort | The loading of a media is aborted | `img1.onabort = function() {`<br>`  alert("The image could not be loaded");`<br>`}` |
| onerror | An error occurs when loading a document or an image | `img1.onerror = function() {`<br>`  alert("An error occurred while loading the image.");`<br>`}` |
| onresize | The document view is resized | `window.onresize = function() {`<br>`  alert("The window has been resized.");`<br>`}` |
| onscroll | The document view is scrolled | `window.onscroll = function() {`<br>`  alert("The window has been scrolled.");`<br>`}` |

#### 2. Keyboard Events

| Keyboard Event | Description | Example |
| :--- | :--- | :--- |
| onkeydown | A key is pressed down | `document.onkeydown = function() {`<br>`  alert("A key was pressed.");`<br>`}` |
| onkeypress | A key is pressed down and released | `document.onkeypress = function() {`<br>`  alert("A key was pressed.");`<br>`}` |
| onkeyup | A key is released | `document.onkeyup = function() {`<br>`  alert("A key was released.");`<br>`}` |

#### 3. Mouse Events

| Mouse Event | Description | Example |
| :--- | :--- | :--- |
| onclick | The user clicks on an element | `document.getElementById("myBtn").onclick = function() {`<br>`  alert("Hello World");`<br>`}` |
| oncontextmenu | The user right-clicks on an element to open a context menu | `document.getElementById("myP").oncontextmenu = function() {`<br>`  alert("Right-clicking has been disabled");`<br>`}` |
| ondblclick | The user double-clicks on an element | `document.getElementById("myP").ondblclick = function() {`<br>`  alert("Double-clicking has been disabled");`<br>`}` |
| onmousedown | A mouse button is pressed down | `document.getElementById("myP").onmousedown = function() {`<br>`  alert("Mouse down has been disabled");`<br>`}` |
| onmouseenter | The pointer is moved onto an element | `document.getElementById("myP").onmouseenter = function() {`<br>`  alert("Mouse enter has been disabled");`<br>`}` |
| onmouseleave | The pointer is moved out of an element | `document.getElementById("myP").onmouseleave = function() {`<br>`  alert("Mouse leave has been disabled");`<br>`}` |
| onmousemove | The pointer is moving while it is over an element | `document.getElementById("myP").onmousemove = function() {`<br>`  alert("Mouse move has been disabled");`<br>`}` |
| onmouseout | The pointer is moved out of an element, or onto one of its children | `document.getElementById("myP").onmouseout = function() {`<br>`  alert("Mouse out has been disabled");`<br>`}` |
| onmouseover | The pointer is moved onto an element, or onto one of its children | `document.getElementById("myP").onmouseover = function() {`<br>`  alert("Mouse over has been disabled");`<br>`}` |
| onmouseup | A mouse button is released | `document.getElementById("myP").onmouseup = function() {`<br>`  alert("Mouse up has been disabled");`<br>`}` |

#### 4. Form Events

| Form Event | Description | Example |
| :--- | :--- | :--- |
| onblur | An element loses focus | `document.getElementById("myText").onblur = function() {`<br>`  alert("The input field is now blurred.");`<br>`}` |
| onchange | The content of a form element, the selection, or the checked state has changed (for <input>, <keygen>, and <select>) | `document.getElementById("mySelect").onchange = function() {`<br>`  alert("The input field has been changed.");`<br>`}` |
| onfocus | An element gets focus | `document.getElementById("myText").onfocus = function() {`<br>`  alert("The input field is now focused.");`<br>`}` |
| onfocusin | An element is about to get focus | `document.getElementById("myText").onfocusin = function() {`<br>`  alert("The input field is about to get focus.");`<br>`}` |
| onfocusout | An element is about to lose focus | `document.getElementById("myText").onfocusout = function() {`<br>`  alert("The input field is about to lose focus.");`<br>`}` |
| oninput | The value of an element changes | `document.getElementById("myText").oninput = function() {`<br>`  alert("The input field has been changed.");`<br>`}` |
| oninvalid | An element is invalid | `document.getElementById("myText").oninvalid = function() {`<br>`  alert("The input field is invalid.");`<br>`}` |
| onreset | A form is reset | `document.getElementById("myForm").onreset = function() {`<br>`  alert("The form has been reset.");`<br>`}` |
| onsearch | The user writes something in a search field (for <input="search">) | `document.getElementById("mySearch").onsearch = function() {`<br>`  alert("The search field has been changed.");`<br>`}` |
| onselect | Some text is selected in an element | `document.getElementById("myText").onselect = function() {`<br>`  alert("Some text is selected in the input field.");`<br>`}` |
| onsubmit | A form is submitted | `document.getElementById("myForm").onsubmit = function() {`<br>`  alert("The form has been submitted.");`<br>`}` |

#### 5. Drag Events

| Drag Event | Description | Example |
| :--- | :--- | :--- |
| ondrag | An element is being dragged | `document.getElementById("myImg").ondrag = function() {`<br>`  alert("The image is being dragged.");`<br>`}` |
| ondragend | A drag operation is being ended (by releasing a mouse button or hitting the escape key) | `document.getElementById("myImg").ondragend = function() {`<br>`  alert("The image has been dragged.");`<br>`}` |
| ondragenter | A dragged element or text selection enters a valid drop target | `document.getElementById("myImg").ondragenter = function() {`<br>`  alert("The image has been dragged into the drop zone.");`<br>`}` |
| ondragleave | A dragged element or text selection leaves a valid drop target | `document.getElementById("myImg").ondragleave = function() {`<br>`  alert("The image has been dragged out of the drop zone.");`<br>`}` |
| ondragover | An element or text selection is being dragged over a valid drop target | `document.getElementById("myImg").ondragover = function() {`<br>`  alert("The image is being dragged over the drop zone.");`<br>`}` |
| ondragstart | The user starts dragging an element or text selection | `document.getElementById("myImg").ondragstart = function() {`<br>`  alert("The image is being dragged.");`<br>`}` |
| ondrop | An element or text selection is dropped on a valid drop target | `document.getElementById("myImg").ondrop = function() {`<br>`  alert("The image has been dropped in the drop zone.");`<br>`}` |

#### 6. Clipboard Events

| Clipboard Event | Description | Example |
| :--- | :--- | :--- |
| oncopy | The user copies the content of an element | `document.getElementById("myP").oncopy = function() {`<br>`  alert("The paragraph was copied.");`<br>`}` |
| oncut | The user cuts the content of an element | `document.getElementById("myP").oncut = function() {`<br>`  alert("The paragraph was cut.");`<br>`}` |
| onpaste | The user pastes some content in an element | `document.getElementById("myP").onpaste = function() {`<br>`  alert("Something was pasted in the paragraph.");`<br>`}` |

#### 7. Media Events

| Media Event | Description | Example |
| :--- | :--- | :--- |
| onabort | The loading of a media is aborted | `document.getElementById("myVideo").onabort = function() {`<br>`  alert("The video loading has been aborted.");`<br>`}` |
| oncanplay | The browser can start playing the media (when it has buffered enough to begin) | `document.getElementById("myVideo").oncanplay = function() {`<br>`  alert("The video can now be played.");`<br>`}` |
| oncanplaythrough | The browser can play through the media without stopping for buffering | `document.getElementById("myVideo").oncanplaythrough = function() {`<br>`  alert("The video can now be played through.");`<br>`}` |
| ondurationchange | The duration of the media has changed | `document.getElementById("myVideo").ondurationchange = function() {`<br>`  alert("The video duration has changed.");`<br>`}` |
| onemptied | The media has become empty | `document.getElementById("myVideo").onemptied = function() {`<br>`  alert("The video has become empty.");`<br>`}` |
| onended | The media has reach the end (a useful event for messages like "thanks for listening") | `document.getElementById("myVideo").onended = function() {`<br>`  alert("The video has ended.");`<br>`}` |
| onerror | An error occurred during the loading of a media | `document.getElementById("myVideo").onerror = function() {`<br>`  alert("An error occurred while loading the video.");`<br>`}` |
| onloadeddata | The browser has loaded the current frame of the media | `document.getElementById("myVideo").onloadeddata = function() {`<br>`  alert("The video frame has been loaded.");`<br>`}` |
| onloadedmetadata | The browser has loaded meta data for the media | `document.getElementById("myVideo").onloadedmetadata = function() {`<br>`  alert("The video meta data has been loaded.");`<br>`}` |
| onloadstart | The browser starts looking for the media | `document.getElementById("myVideo").onloadstart = function() {`<br>`  alert("The video is being loaded.");`<br>`}` |
| onpause | The media has been paused either by the user or programmatically | `document.getElementById("myVideo").onpause = function() {`<br>`  alert("The video has been paused.");`<br>`}` |
| onplay | The media has been started or is no longer paused | `document.getElementById("myVideo").onplay = function() {`<br>`  alert("The video has been played.");`<br>`}` |
| onplaying | The media is playing after having been paused or stopped for buffering | `document.getElementById("myVideo").onplaying = function() {`<br>`  alert("The video is playing.");`<br>`}` |
| onprogress | The browser is downloading the media | `document.getElementById("myVideo").onprogress = function() {`<br>`  alert("The video is being downloaded.");`<br>`}` |
| onratechange | The playing speed of the media has changed | `document.getElementById("myVideo").onratechange = function() {`<br>`  alert("The video rate has changed.");`<br>`}` |
| onseeked | A seek operation completed | `document.getElementById("myVideo").onseeked = function() {`<br>`  alert("The video seek operation completed.");`<br>`}` |
| onseeking | A seek operation began | `document.getElementById("myVideo").onseeking = function() {`<br>`  alert("The video seek operation began.");`<br>`}` |
| onstalled | The browser is trying to get media data, but data is not available | `document.getElementById("myVideo").onstalled = function() {`<br>`  alert("The video data is not available.");`<br>`}` |
| onsuspend | The browser is intentionally not getting media data | `document.getElementById("myVideo").onsuspend = function() {`<br>`  alert("The video download has been suspended.");`<br>`}` |
| ontimeupdate | The playing position has changed (like when the user fast forwards to a different point in the media) | `document.getElementById("myVideo").ontimeupdate = function() {`<br>`  alert("The video time has been updated.");`<br>`}` |
| onvolumechange | The volume has been changed | `document.getElementById("myVideo").onvolumechange = function() {`<br>`  alert("The video volume has been changed.");`<br>`}` |
| onwaiting | The media has paused but is expected to resume (like when the media pauses to buffer more data) | `document.getElementById("myVideo").onwaiting = function() {`<br>`  alert("The video is waiting.");`<br>`}` |

#### 8. Web Storage Events

| Web Storage Event | Description | Example |
| :--- | :--- | :--- |
| onstorage | A web storage area has been updated | `window.onstorage = function(event) {`<br>`  alert("The " + event.storageArea + " storage area has been updated.");`<br>`}` |

#### 9. Animation Events

| Animation Event | Description | Example |
| :--- | :--- | :--- |
| onanimationend | A CSS animation has completed | `document.getElementById("myDiv").onanimationend = function() {`<br>`  alert("The animation has ended.");`<br>`}` |
| onanimationiteration | A CSS animation is repeated | `document.getElementById("myDiv").onanimationiteration = function() {`<br>`  alert("The animation is repeated.");`<br>`}` |
| onanimationstart | A CSS animation has started | `document.getElementById("myDiv").onanimationstart = function() {`<br>`  alert("The animation has started.");`<br>`}` |

#### 10. Transition Events

| Transition Event | Description | Example |
| :--- | :--- | :--- |
| ontransitionend | A CSS transition has completed | `document.getElementById("myDiv").ontransitionend = function() {`<br>`  alert("The transition has ended.");`<br>`}` |


#### 14. Print Events

| Print Event | Description | Example |
| :--- | :--- | :--- |
| onafterprint | The document has started printing or the print preview has been closed | `window.onafterprint = function() {`<br>`  alert("The document has started printing or the print preview has been closed.");`<br>`}` |
| onbeforeprint | The document is about to be printed or the print preview is opened | `window.onbeforeprint = function() {`<br>`  alert("The document is about to be printed or the print preview is opened.");`<br>`}` |



# Date and Time in JavaScript

JavaScript Date objects are based on a time value that is the number of milliseconds since 1 January, 1970 UTC. The Date object is a built-in object that provides methods for working with dates and times. The Date object is used to work with dates and times. It is not a function object, so you do not use the new operator with it.

## Creating a Date Object

There are four ways to create a new Date object:

  1. new Date()
  2. new Date(value)
  3. new Date(dateString)
  4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

#### 1. new Date()

When invoked as a constructor, without arguments, returns a new Date object representing the current date and time:
```javascript
    var d = new Date();
    console.log(d);
```

#### 2. new Date(value)
  
  When invoked as a constructor, with a single numeric argument, returns a new Date object representing a time value as milliseconds since midnight, January 1, 1970 UTC:
```javascript
      var d = new Date(86400000);
      console.log(d);
```

#### 3. new Date(dateString)

When invoked as a constructor, with a single string argument, returns a new Date object representing a time value as milliseconds since midnight, January 1, 1970 UTC:
```javascript
      var d = new Date("October 13, 2014 11:13:00");
      console.log(d);
```

#### 4. new Date(year, month, day, hours, minutes, seconds, milliseconds)

When invoked as a constructor, with multiple arguments, returns a new Date object representing the date and time specified by the arguments:
```javascript
      var d = new Date(99,5,24,11,33,30,0);
      console.log(d);
```

## Date Methods

| Method | Description |
| :--- | :--- |
| Date.now() | Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC. |
| Date.parse() | Parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognizable or, in some cases, contains illegal date values (e.g. 2015-02-31). |
| Date.UTC() | Accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time. |

## Date Properties

| Property | Description |
| :--- | :--- |
| Date.prototype.constructor | Specifies the function that creates an object's prototype. |
| Date.prototype.date | Returns the day of the month for the specified date according to local time. |
| Date.prototype.day | Returns the day of the week for the specified date according to local time. |
| Date.prototype.fullYear | Returns the year of the specified date according to local time. |
| Date.prototype.hours | Returns the hour for the specified date, according to local time. |
| Date.prototype.milliseconds | Returns the milliseconds in the specified date according to local time. |
| Date.prototype.minutes | Returns the minutes in the specified date according to local time. |
| Date.prototype.month | Returns the month in the specified date according to local time. |
| Date.prototype.seconds | Returns the seconds in the specified date according to local time. |
| Date.prototype.time | Returns the numeric value of the specified date as the number of milliseconds since midnight, January 1, 1970 UTC. |
| Date.prototype.timeZoneOffset | Returns the time-zone offset in minutes for the current locale. |
| Date.prototype.toDateString() | Converts a date to a readable string. |
| Date.prototype.toISOString() | Returns a string in simplified extended ISO format (ISO 8601). |
| Date.prototype.toJSON() | Returns a string representation of the Date object. |
| Date.prototype.toLocaleDateString() | Converts a date to a string, using locale conventions. |
| Date.prototype.toLocaleString() | Converts a date to a string, using locale conventions. |
| Date.prototype.toLocaleTimeString() | Converts a date to a string, using locale conventions. |
| Date.prototype.toString() | Converts a date to a string. |
| Date.prototype.toTimeString() | Converts a date to a string. |
| Date.prototype.toUTCString() | Converts a date to a string, according to universal time. |
| Date.prototype.valueOf() | Returns the primitive value of a Date object. |

## Date Examples

#### 1. Date.now()
The Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC:
```javascript
    var d = Date.now();
    console.log(d);
```

#### 2. Date.parse()
The Date.parse() method parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN if the string is unrecognizable or, in some cases, contains illegal date values (e.g. 2015-02-31):
```javascript
    var d = Date.parse("October 13, 2014 11:13:00");
    console.log(d);
```

#### 3. Date.UTC()
The Date.UTC() method accepts the same parameters as the longest form of the constructor, and returns the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time:
```javascript
    var d = Date.UTC(99,5,24,11,33,30,0);
    console.log(d);
```

#### 4. Date.prototype.constructor
The Date.prototype.constructor property specifies the function that creates an object's prototype:
```javascript
    var d = new Date();
    console.log(d.constructor);
```

#### 5. Date.prototype.date
The Date.prototype.date property returns the day of the month for the specified date according to local time:
```javascript
    var d = new Date();
    console.log(d.date);
```

#### 6. Date.prototype.day
The Date.prototype.day property returns the day of the week for the specified date according to local time:
```javascript
    var d = new Date();
    console.log(d.day);
```

#### 7. Date.prototype.fullYear
The Date.prototype.fullYear property returns the year of the specified date according to local time:
```javascript
    var d = new Date();
    console.log(d.fullYear);
```

#### 8. Date.prototype.hours
The Date.prototype.hours property returns the hour for the specified date, according to local time:
```javascript
    var d = new Date();
    console.log(d.hours);
```
