# date function in php

#### date_diff() function
- The date_diff() function is used to find the difference between two dates.
- The date_diff() function returns a DateInterval object.
- The DateInterval object contains the difference between the two dates.
- Syntax: `date_diff(date1, date2, [absolute])`
-Example:
```php
<?php
$d1=date_create("2013-03-15");
$d2=date_create("2013-12-12");
$diff=date_diff($d1,$d2);
echo $diff->format("%R%a days");
?>
```
- Output: `+272 days`

#### date() function
- The date() function is used to format a local time/date.
- Syntax: `date(format, [timestamp])`
- Example:
```php
<?php
echo date("Y/m/d") . "<br>";
echo date("Y.m.d") . "<br>";
echo date("Y-m-d") . "<br>";
echo date("l");
?>
```

|Character|Description|Example|
|---|---|---|
|d|Day of the month, 2 digits with leading zeros|01 to 31|
|D|A textual representation of a day, three letters|Mon through Sun|
|j|Day of the month without leading zeros|1 to 31|
|l (lowercase 'L')|A full textual representation of the day of the week|Sunday through Saturday|
|N|ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)|1 (for Monday) through 7 (for Sunday)|
|S|English ordinal suffix for the day of the month, 2 characters|st, nd, rd or th. Works well with j|
|w|Numeric representation of the day of the week|0 (for Sunday) through 6 (for Saturday)|
|z|The day of the year (starting from 0)|0 through 365|
| W | ISO-8601 week number of year, weeks starting on Monday (added in PHP 4.1.0) | Example: 42 (the 42nd week in the year) |
| F | A full textual representation of a month, such as January or March | January through December |
| m | Numeric representation of a month, with leading zeros | 01 through 12 |
| M | A short textual representation of a month, three letters | Jan through Dec |
| n | Numeric representation of a month, without leading zeros | 1 through 12 |
| t | Number of days in the given month | 28 through 31 |
| L | Whether it's a leap year | 1 if it is a leap year, 0 otherwise. |
| o | ISO-8601 year number. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead. (added in PHP 5.1.0) | Examples: 1999 or 2003 |
| Y | A full numeric representation of a year, 4 digits | Examples: 1999 or 2003 |
| y | A two digit representation of a year | Examples: 99 or 03 |
| a | Lowercase Ante meridiem and Post meridiem | am or pm |
| A | Uppercase Ante meridiem and Post meridiem | AM or PM |
| B | Swatch Internet time | 000 through 999 |
| g | 12-hour format of an hour without leading zeros | 1 through 12 |
| G | 24-hour format of an hour without leading zeros | 0 through 23 |
| h | 12-hour format of an hour with leading zeros | 01 through 12 |
| H | 24-hour format of an hour with leading zeros | 00 through 23 |
| i | Minutes with leading zeros | 00 to 59 |
| s | Seconds, with leading zeros | 00 through 59 |


## time() function
- The time() function returns the current time in seconds since the Unix Epoch (January 1 1970 00:00:00 GMT).
- Syntax: `time()`
- Example:
```php
<?php
echo time();
?>
```
- Output: `1520000000`
