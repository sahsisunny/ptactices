# File Handling in PHP

## Introduction

- PHP provides a set of functions to handle files.
- These functions are used to create, open, read, write, delete, and close files on the server.
- PHP has several functions for creating, reading, writing, opening, and closing files on the server.

## PHP File Functions

- PHP has a set of built-in functions to create, open, read, write, delete, and close files on the server.
- The following table lists some of the important file functions in PHP.

| Function   | Description             | Example                                       | Remarks                          |
| ---------- | ----------------------- | --------------------------------------------- | -------------------------------- |
| readfile() | Outputs a file          | `readfile("welcome.txt");`                    | Open the file in read-only mode. |
| fopen()    | Opens a file or URL     | `$file = fopen("welcome.txt", "r");`          | Open the file in read-only mode. |
| fclose()   | Closes an open file     | `fclose($file);`                              | Close the file.                  |
| fread()    | Reads from an open file | `echo fread($file, filesize("welcome.txt"));` | Read the entire file.            |
| fwrite()   | Writes to a file        | `fwrite($file, "Hello World. Testing!");`     | Write to the file.               |

| Function | Description                             | Example                                      | Remarks                     |
| -------- | --------------------------------------- | -------------------------------------------- | --------------------------- |
| fgets()  | Gets line from file pointer             | `echo fgets($file);`                         | Read only one line.         |
| fgetc()  | Gets character from file pointer        | `echo fgetc($file);`                         | Read only one character.    |
| feof()   | Tests for end-of-file on a file pointer | `while(!feof($file)) { echo fgets($file); }` | Read the file line by line. |

#### Example for read file line by line in loop using fgets() function

```php
<?php
$file = fopen("welcome.txt", "r");
while(!feof($file)) {
  echo fgets($file) . "<br>";
}
fclose($file);
?>
```

| Function            | Description                     | Example                                                      | Remarks |
| ------------------- | ------------------------------- | ------------------------------------------------------------ | ------- |
| file()              | Reads entire file into an array | `print_r(file("welcome.txt"));`                              |
| file_get_contents() | Reads entire file into a string | `echo file_get_contents("welcome.txt");`                     |
| file_put_contents() | Write a string to a file        | `file_put_contents("welcome.txt", "Hello World. Testing!");` |
| unlink()            | Deletes a file                  | `unlink("welcome.txt");`                                     |
| rename()            | Renames a file or directory     | `rename("welcome.txt", "test.txt");`                         |
| copy()              | Copies a file                   | `copy("welcome.txt", "welcome2.txt");`                       |
| mkdir()             | Makes directory                 | `mkdir("newdir");`                                           |
| rmdir()             | Removes directory               | `rmdir("newdir");`                                           |
| chdir()             | Changes directory               | `chdir("newdir");`                                           |
| opendir()           | Opens directory                 | `$dir = opendir(".");`                                       |

## Mode in file handling

- The mode parameter of the fopen() function specifies the type of access you require to the file.

| Mode | Description                        | Example                               |
| ---- | ---------------------------------- | ------------------------------------- | ---------------------------------------------- |
| r    | Opens a file for read only.        | `$file = fopen("welcome.txt", "r");`  |
| w    | Opens a file for write only.       | `$file = fopen("welcome.txt", "w");`  |
| a    | Opens a file for write only.       | `$file = fopen("welcome.txt", "a");`  |
| x    | Creates a new file for write only. | `$file = fopen("welcome.txt", "x");`  | <!-- It returns error if file is available --> |
| r+   | Opens a file for read/write.       | `$file = fopen("welcome.txt", "r+");` |
| w+   | Opens a file for read/write.       | `$file = fopen("welcome.txt", "w+");` |
| a+   | Opens a file for read/write.       | `$file = fopen("welcome.txt", "a+");` |
| x+   | Creates a new file for read/write. | `$file = fopen("welcome.txt", "x+");` |

## File Handling Example

- The following example shows how to create a file, write to it, read from it, and then delete it.

### Create a File

- The following example creates a file named "welcome.txt" and writes "Hello World. Testing!" to it.

```php
<?php
$file = fopen("welcome.txt", "w");
?>
```
