# String FUnction in PHP

## chr() function

- The chr() function returns a character from the specified ASCII value.

```php
<?php
echo chr(52) . "<br>";
```

### count_chars() function

- The count_chars() function returns information about the usage of characters in a string.

```php
<?php
$str = "Hello world. It's a beautiful day.";
print_r(count_chars($str, 1));
```

- $str is the string to be checked. and 1 is the mode. 1 is for return an array with the byte value as key and the frequency of every byte as value.

- Following are the mode of count_chars() function.

| Mode | Description                                                                           |
| ---- | ------------------------------------------------------------------------------------- |
| 0    | Returns an array with the byte value as key and the frequency of every byte as value. |
| 1    | Returns an array with the byte value as key and the frequency of every byte as value. |
| 2    | Returns a string containing all unique characters is found in the tested string.      |

### explode() function

- The explode() function breaks a string into an array.

```php
<?php
$str = "Hello world. It's a beautiful day.";
print_r (explode(" ",$str));
```

- Output:

```php
Array ( [0] => Hello [1] => world. [2] => It's [3] => a [4] => beautiful [5] => day. )
```

### implode() function

- The implode() function returns a string from the elements of an array.

````php
<?php
$arr = array('Hello','World!','Beautiful','Day!');
echo implode(" ",$arr);
- Output:
```php
Hello World! Beautiful Day!
````

### join() function

- The join() function is an alias of the implode() function.

```php
<?php
$arr = array('Hello','World!','Beautiful','Day!');
echo join(" ",$arr);
```

- Output:

```php
Hello World! Beautiful Day!
```

### lcfirst() function

- The lcfirst() function converts the first character of a string to lowercase.

```php
<?php
echo lcfirst("Hello World!");
```

- Output:

```php
hello World!
```

### ltrim() function

- The ltrim() function removes whitespace or other predefined characters from the left side of a string.

```php
<?php
echo ltrim("Hello World!");
```

- Output:

```php
Hello World!
```

### md5() function

- The md5() function calculates the MD5 hash of a string.

```php
<?php
echo md5("Hello");
```

- Output:

```php
8b1a9953c4611296a827abf8c47804d7
```

### nl2br() function

- The nl2br() function inserts HTML line breaks before all newlines in a string.

```php
<?php
echo nl2br("One line.\nAnother line.");
```

- Output:

```php
One line.<br />Another line.
```

### number_format() function

- The number_format() function formats a number with grouped thousands.

```php
<?php
echo number_format(1234);
```

- Output:

```php
1,234
```

### ord() function

- The ord() function returns the ASCII value of the first character of a string.

```php
<?php
echo ord("Hello");
```

- Output:

```php
72
```

### rtrim() function

- The rtrim() function removes whitespace or other predefined characters from the right side of a string.

```php
<?php
echo rtrim("Hello World!");
```

- Output:

```php
Hello World!
```

### sha1() function

- The sha1() function calculates the SHA-1 hash of a string.

```php
<?php
echo sha1("Hello");
```

- Output:

```php
aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d
```

### str_repeat() function

- The str_repeat() function repeats a string a specified number of times.

```php
<?php
echo str_repeat("Hello",5);
```

- Output:

```php
HelloHelloHelloHelloHello
```

### str_replace() function

- The str_replace() function replaces some characters with some other characters in a string.

```php
<?php
echo str_replace("world","Dolly","Hello world!");
```

- Output:

```php
Hello Dolly!
```

### str_shuffle() function

- The str_shuffle() function randomly shuffles all characters in a string.

```php
<?php
echo str_shuffle("Hello world!");
```

- Output:

```php
!dlrow olleH
```

### str_split() function

- The str_split() function converts a string to an array.

```php
<?php
print_r(str_split("Hello"));
```

- Output:

```php
Array ( [0] => H [1] => e [2] => l [3] => l [4] => o )
```

### str_word_count() function

- The str_word_count() function counts the number of words in a string.

```php
<?php
echo str_word_count("Hello world!");
```

- Output:

```php
2
```

### strlen() function

- The strlen() function returns the length of a string.

```php
<?php
echo strlen("Hello world!");
```

- Output:

```php
12
```

### strpos() function

- The strpos() function searches for a specific text within a string.

```php
<?php
echo strpos("Hello world!","world");
```

- Output:

```php
6
```

### str_rev() function

- The str_rev() function reverses a string.

```php
<?php
echo strrev("Hello world!");
```

- Output:

```php
!dlrow olleH
```

### str_pos() function

- The str_pos() function searches for a specific text within a string.

```php
<?php
echo str_pos("Hello world!","world");
```

- Output:

```php
6
```
