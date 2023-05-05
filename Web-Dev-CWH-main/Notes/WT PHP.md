# Objective

- The previous name of PHP was ****\_\_\_\_\_\_****  (Personal Home Page).
- The acryname PHP is a ****\_\_\_\_\_\_****  type acryoname (recursive).
- PHP is a ****\_\_\_\_\_\_****  language meant for ****\_\_\_\_\_\_**** .(server side, web development)
- PHP is a ****\_\_\_\_\_\_**** side ****\_\_\_\_\_\_****  language. (server, scripting)
- AJAX stands for ****\_\_\_\_\_\_****  .(Asynchronous JavaScript and XML)
- The client side scripting language best suited for PHP is ****\_\_\_\_\_\_****  .(Javascript)
- The ****\_\_\_\_\_\_**** method is used for accessing the data fade by HTML form , in the PHP script.(POST or GET)
- The ****\_\_\_\_\_\_****  property of form element is used to specify the name of server side script.(action)
- The AJAX technology facilitates development of ****\_\_\_\_\_\_****  pages for any website.(Dynamic)
- The DOM concept is used in ****\_\_\_\_\_\_**** .(AJAX)
- PHP is purely a object language.(False)
- AJAX is a programming language.(False)

# Short Questions

## 1. Write short notes on any four libraries function of PHP with example.

#### Ans-

- PHP library functions are used to perform various operations like string manipulation, mathematical operations, date and time operations, file handling, etc.

1. **strlen() function**

- The strlen() function is used to find the length of a string. It returns the length of the string. The syntax of strlen() function is:
  strlen(string)
- Example:

```php
<?php
echo strlen("Hello world!");
?>
```

- Output: 12

2. ****strrev() function****

- The strrev() function is used to reverse a string. It returns the reversed string. The syntax of strrev() function is:
  strrev(string)
- Example:

```php
<?php
echo strrev("Hello world!");
?>
```

- Output: !dlrow olleH

3. **ceil() function**

- The ceil() function is used to round a floating-point number up to the next highest integer. It returns the next highest integer value by rounding up value if necessary. The syntax of ceil() function is:
  ceil(number)
- Example:

```php
<?php
echo ceil(4.3); // returns 5
echo ceil(9.999); // returns 10
echo ceil(-5.1); // returns -5
?>
```

- Output: 5 10 -5

4. **fclose() function**

- The fclose() function is used to close an open file pointer. It returns true on success or false on failure. The syntax of fclose() function is:
  fclose(file_pointer)
- Example:

```php
<?php
$file = fopen("test.txt","w");
fclose($file);
?>
```

- Output: No output

## Explain the important and basic element for creating HTML page.
#### Ans-
- **head**
    - The head element is a container for all the head elements. The head element can include a title for the document, scripts, styles, meta information, and more.
- **title**
    -  The title element specifies a title for the document. The title element is required in all HTML documents, and it should be one of the first elements in the head section of the document.
- *body**
    - The body element defines the document's body. The body element contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.

- **script**
    - The script element is used to define a client-side script (JavaScript). The script element either contains scripting statements, or it points to an external script file through the src attribute.
- **html**
    - The html element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
- **style**
    - The style element is used to define style information for an HTML document. The style element can contain CSS rules and selectors to specify the formatting of HTML elements.
- Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
    <style>
      body {
        background-color: linen;
      }
    </style>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## Explain the form element of HTML with example.
- The form element is used to create an HTML form for user input. The form element can contain one or more of the following form elements: text fields, checkboxes, radio buttons, submit buttons, etc.
- The following are the some most used form elements:
- **input**
    - The input element is used to create interactive controls for web-based forms in order to accept data from the user. The input element can be displayed in many ways, depending on the type attribute.
    - Example:
    ```html
    <form>
      First name: <input type="text" name="firstname"><br>
      Last name: <input type="text" name="lastname"><br>
      <input type="submit" value="Submit">
    </form>
    ```
- **textarea**
    - The textarea element defines a multi-line input control (text area). By default, a text area is displayed with a fixed width and height. However, you can use CSS to change the appearance of a text area.
    - Example:
    ```html
    <form>
      <textarea name="message" rows="10" cols="30">
      The cat was playing in the garden.
      </textarea>
    </form>
    ```
- **select**
    - The select element defines a drop-down list. The select element is used in a form, to create a drop-down list.
    - Example:
    ```html
    <form>
      <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </form>
    ```
- **button**
    - The button element defines a clickable button. The button element can be used inside a form, or anywhere in a document with a suitable script.
    - Example:
    ```html
    <button type="button" onclick="alert('Hello world!')">Click Me!</button>
    ```

## Write a PHP script to print the prime numbers between 1 to 100.
#### Ans-
```php
<?php
for($i=1;$i<=100;$i++)
{
    $flag=0;
    for($j=2;$j<$i;$j++)
    {
        if($i%$j==0)
        {
            $flag=1;
            break;
        }
    }
    if($flag==0)
    {
        echo $i." ";
    }
}
?>
```

# Long Questions

## Explain AJAX technology with example.
#### Ans-
- AJAX stands for Asynchronous JavaScript and XML. AJAX is not a programming language. AJAX is a technique for creating fast and dynamic web pages. AJAX allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
- AJAX is a combination of:
    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - JavaScript and HTML DOM (to display or use the data)
- AJAX is a developer's dream, because you can:
    - Update a web page without reloading the page
    - Request data from a server - after the page has loaded
    - Receive data from a server  - after the page has loaded
    - Send data to a server - in the background
- Example:
```html
<!DOCTYPE html>
<html>
<body>
  <button type="button" onclick="f1()">click</button>
  <p id="p1">main content</p>

  <script>
    function f1() {
      var xhttp = new XMLHttpRequest();
      xhttp.onload = function () {
        document.getElementById("p1").innerHTML = this.responseText;
      };
      xhttp.open("GET", "file.txt");
      xhttp.send();
    }
  </script>
</body>
</html>
```
        
```txt
file.txt
hello world
```
- XMLHttpRequest Object
    - The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
- file.txt is a text file which is in the same folder as the HTML file.
- The onload event is triggered when the XMLHttpRequest object has received a response from the server.
- The open() method specifies the type of request.
- The send() method sends the request to the server (used for GET)
- The responseText property returns the server response as a text string.
- The innerHTML property sets or returns the HTML content (inner HTML) of an element.

## Write a HTML and PHP code to accept two number from user and display sum of two numbers.
#### Ans-
```html
<!DOCTYPE html>
<html>
<body>
  <form action="sum.php" method="post">
    <input type="text" name="num1" placeholder="Enter first number">
    <input type="text" name="num2" placeholder="Enter second number">
    <input type="submit" value="Submit">
  </form>
</body>
</html>
```
```php
<?php
$num1=$_POST['num1'];
$num2=$_POST['num2'];
$sum=$num1+$num2;
echo "Sum of two numbers is ".$sum;
?>
```

## Explain the database procedural method of PHP with example.
#### Ans-
- PHP provides a procedural interface to access a database. The procedural interface is a set of functions that can be used to access a database. The procedural interface is a set of functions that can be used to access a database.
- in PHP, the procedural interface is implemented by the MySQLi extension.
- Example:
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
```
- The mysqli_connect() function opens a new connection to the MySQL server.
- The die() function prints a message and exits the current script.
- The mysqli_connect_error() function returns the error description from the last connection error.
- The mysqli_close() function closes a previously opened database connection.
- The mysqli_query() function performs a query against the database.
-  $conn is the connection variable.

## Explain the difference types of CSS Selectors with example.
#### Ans-
- CSS selectors are used to "find" (or select) the HTML elements you want to style.
- There are different types of CSS selectors, which allow you to select elements based on their:
    - id
    - class
    - type
    - attributes
    - values of attributes
#### id Selector
- The id selector uses the id attribute of an HTML element to select a specific element.
- The id of an element should be unique within a page, so the id selector is used to select one unique element!
- To select an element with a specific id, write a hash (#) character, followed by the id of the element.
- Example:
```css
#para1 {
  color: red;
}
```
#### class Selector
- The class selector selects elements with a specific class attribute.
- To select elements with a specific class, write a period (.) character, followed by the name of the class.
- Example:
```css
.center {
  text-align: center;
  border: 3px solid green;
}
```
#### Universal Selector
- The universal selector (*) selects all elements in the document.
- Example:
```css
* {
  box-sizing: border-box;
}
```
#### Grouping Selector
- You can group selectors by placing them inside curly brackets.
- Example:
```css
h1, h2, p {
  color: red;
}
```
#### Descendant Selector
- The descendant selector selects all elements that are descendants of a specified element.
- Example:
```css
div p {
  color: red;
}
```
#### Child Selector
- The child selector selects all elements that are the children of a specified element.
- Example:
```css
div > p {
  color: red;
}
```
#### Attribute Selector
- The attribute selector selects elements with a specified attribute.
- Example:
```css
a[target] {
  color: red;
}
```