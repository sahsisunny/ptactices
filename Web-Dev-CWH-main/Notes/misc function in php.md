# misc function in php

#### constant() function
- `constant()` function is used to get the value of a constant.
- `constant()` function returns `NULL` if the constant is not defined.
- Syntax: `constant(constant_name)`
- Example:
```php
<?php
define("GREETING", "Welcome to W3Schools.com!");
echo constant("GREETING");
?>
```
- Output: `Welcome to W3Schools.com!`

#### die() function and exit() function
- `die()` function is used to output a message and terminate the current script.
- Syntax: `die(message)`
- Example:
```php
<?php
echo "Hello World!";
die();
echo "This is never printed";
?>
```
- Output: `Hello World!`

#### sleep() function
- `sleep()` function suspends execution of the current thread for a given number of seconds.
- Syntax: `sleep(seconds)`
- Example:
```php
<?php
echo "Hello World!";
sleep(5);
echo "This is printed after 5 seconds";
?>
```
- Output: `Hello World! This is printed after 5 seconds`
