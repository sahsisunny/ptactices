# MySQL

#### What is MySQL?

- MySQL is a relational database management system
- MySQL is open-source
- MySQL is free
- MySQL is ideal for both small and large applications
- MySQL is very fast, reliable, scalable, and easy to use
- MySQL is cross-platform
- MySQL is compliant with the ANSI SQL standard
- MySQL was first released in 1995
- MySQL is developed, distributed, and supported by Oracle Corporation
- MySQL is named after co-founder Monty Widenius's daughter: My


#### Who Uses MySQL?

- Huge websites like Facebook, Twitter, Airbnb, Booking.com, Uber, GitHub, YouTube, etc.
- Content Management Systems like WordPress, Drupal, Joomla!, Contao, etc.
- A very large number of web developers around the world

# Database Operations in MySQL
#### Create Database
- The CREATE DATABASE statement is used to create a new database in MySQL.
- The database is created with the default character set and collation.
- The default character set for MySQL is utf8mb4 and the default collation is utf8mb4_general_ci.
- The database name must be unique. Two databases cannot have the same name.
- The database name is case sensitive.
- The database name must start with a letter or an underscore.
- The database name can only contain letters, numbers, and underscores.
- The database name must be 64 characters or less.

```sql
CREATE DATABASE database_name;
```

#### Drop Database
- The DROP DATABASE statement is used to delete a database in MySQL.
- The database to be deleted must exist.
- The database to be deleted must not be in use by any user.
- The database to be deleted must not be the currently selected database.
- The database to be deleted must not be the default database.

```sql
DROP DATABASE database_name;
```

#### Select in MySQL
- The SELECT statement is used to select data from a database.
- The data returned is stored in a result table, called the result-set.
- The SELECT statement is often called a query.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition;
```

# Connecting to MySQL
#### Connecting to MySQL
- The MySQL server can be connected to using the mysql command-line client.
- The mysql command-line client is a terminal-based client that allows you to connect to a MySQL server and issue commands.
- The mysql command-line client is installed by default with MySQL.
- The mysql command-line client can be used to connect to a MySQL server running on the same computer or on a remote computer.

#### Connecting from webpage using PHP
- The PHP Data Objects (PDO) extension defines a lightweight, consistent interface for accessing databases in PHP.
- PDO defines an interface in PHP to access certain databases.
- PDO does not provide a database driver itself. You must install a database driver to use PDO.
- PDO provides a data-access abstraction layer, which means, regardless of which database you're using, you use the same functions to issue queries and fetch data.
- PDO is an alternative to the MySQLi and MySQL (deprecated) extensions.
- PDO can be used to connect to MySQL, Oracle, Microsoft SQL Server, IBM DB2, PostgreSQL, SQLite, and many other databases.

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$ database = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
```

# Data Types in MySQL
1. Numeric Data Types
2. String Data Types
3. Date and Time Data Types
4. JSON Data Type

#### Numeric Data Types
- Numeric data types store exact numeric values.
- Numeric data types can be used to store integers, floating-point numbers, or both.
- Numeric data types are used to store numbers.
- Numeric data types are used to perform mathematical operations.

| Data Type | Description | Size | Range | Example |
| --- | --- | --- | --- | --- |
| TINYINT | A very small integer. | 1 byte | -128 to 127 | 1 |
| SMALLINT | A small integer. | 2 bytes | -32768 to 32767 | 1 |
| MEDIUMINT | A medium-sized integer. | 3 bytes | -8388608 to 8388607 | 1 |
| INT or INTEGER | A standard integer. | 4 bytes | -2147483648 to 2147483647 | 1 |
| BIGINT | A large integer. | 8 bytes | -9223372036854775808 to 9223372036854775807 | 1 |
| DECIMAL | A fixed-point number. | 0 to 65 bytes | -1038 to 1038 | 1.23 |
| FLOAT | A small (single-precision) floating-point number. | 4 bytes | -3.402823466E+38 to -1.175494351E-38, 0, and 1.175494351E-38 to 3.402823466E+38 | 1.23 |
| DOUBLE or REAL | A large (double-precision) floating-point number. | 8 bytes | -1.7976931348623157E+308 to -2.2250738585072014E-308, 0, and 2.2250738585072014E-308 to 1.7976931348623157E+308 | 1.23 |

#### String Data Types
- String data types are used to store character strings.
- String data types can be used to store text, dates, or other values.
- String data types are used to store text.
- String data types are used to perform string operations.

| Data Type | Description | Size | Range | Example |
| --- | --- | --- | --- | --- |
| CHAR | A fixed-length string (can contain letters, numbers, and special characters). | 0 to 255 characters | - | 'a' |
| VARCHAR | A variable-length string (can contain letters, numbers, and special characters). | 0 to 65,535 characters | - | 'a' |
| TINYTEXT | A TEXT column with a maximum length of 255 (2^8 - 1) characters. | 0 to 255 characters | - | 'a' |
| TEXT | A TEXT column with a maximum length of 65,535 (2^16 - 1) characters. | 0 to 65,535 characters | - | 'a' |
| MEDIUMTEXT | A TEXT column with a maximum length of 16,777,215 (2^24 - 1) characters. | 0 to 16,777,215 characters | - | 'a' |
| LONGTEXT | A TEXT column with a maximum length of 4,294,967,295 or 4GB (2^32 - 1) characters. | 0 to 4,294,967,295 characters | - | 'a' |
| BINARY | A fixed-length string that contains binary data. | 0 to 255 bytes | - | 'a' |
| VARBINARY | A variable-length string that contains binary data. | 0 to 65,535 bytes | - | 'a' |
| TINYBLOB | A BLOB column with a maximum length of 255 (2^8 - 1) bytes. | 0 to 255 bytes | - | 'a' |
| BLOB | A BLOB column with a maximum length of 65,535 (2^16 - 1) bytes. | 0 to 65,535 bytes | - | 'a' |
| MEDIUMBLOB | A BLOB column with a maximum length of 16,777,215 (2^24 - 1) bytes. | 0 to 16,777,215 bytes | - | 'a' |
| LONGBLOB | A BLOB column with a maximum length of 4,294,967,295 or 4GB (2^32 - 1) bytes. | 0 to 4,294,967,295 bytes | - | 'a' |
| ENUM | An enumeration. An ENUM can have a maximum of 65535 distinct values. | 1 to 2 bytes | - | 'a' |
| SET | A set. A SET can have a maximum of 64 distinct members. | 1 to 8 bytes | - | 'a' |

#### Date and Time Data Types
- Date and time data types are used to store date and time values.

| Data Type | Description | Size | Range | Example |
| --- | --- | --- | --- | --- |
| DATE | A date. The supported range is '1000-01-01' to '9999-12-31'. | 3 bytes | - | '2018-01-01' |
| DATETIME | A date and time combination. The supported range is '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. | 8 bytes | - | '2018-01-01 00:00:00' |
| TIMESTAMP | A timestamp. The range is '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC. | 4 bytes | - | '2018-01-01 00:00:00' |
| TIME | A time. The range is '-838:59:59' to '838:59:59'. | 3 bytes | - | '00:00:00' |
| YEAR | A year in 2-digit or 4-digit format. The valid range is 1901 to 2155, or 0000. | 1 byte | - | '2018' |

#### JSON Data Type
- The JSON data type is used to store and retrieve JSON (JavaScript Object Notation) documents.
- The JSON data type is available in MySQL 5.7.8 and later.

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$database = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "CREATE TABLE Persons (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
json JSON
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Persons created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
```

#### Spatial Data Types
- Spatial data types are used to store spatial data.
- Spatial data types are used to store spatial data such as points, lines, polygons, and other geometric objects.
- Spatial data types are available in MySQL 5.7.6 and later.

| Data Type | Description |
| --- | --- |
| GEOMETRY | A geometry object is a collection of points, lines, and polygons. |
| POINT | A point is a geometry object that represents a single location in coordinate space. |
| LINESTRING | A linestring is a geometry object that represents a line between two or more points. |
| POLYGON | A polygon is a geometry object that represents a region bounded by three or more points. |
| MULTIPOINT | A multipoint is a geometry object that represents a collection of points. |
| MULTILINESTRING | A multilinestring is a geometry object that represents a collection of linestrings. |
| MULTIPOLYGON | A multipolygon is a geometry object that represents a collection of polygons. |
| GEOMETRYCOLLECTION | A geometrycollection is a geometry object that represents a collection of geometry objects. |

#### Most used Data Types in MySQL
| Data Type | Description | Example |
| --- | --- | --- |
| INT | A normal integer. | 1 |
| VARCHAR | A variable-length string (can contain letters, numbers, and special characters). | 'a' |
| TEXT | A TEXT column with a maximum length of 65,535 (2^16 - 1) characters. | 'a' |
| DATE | A date. The supported range is '1000-01-01' to '9999-12-31'. | '2018-01-01' |
| DATETIME | A date and time combination. The supported range is '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. | '2018-01-01 00:00:00' |
| TIMESTAMP | A timestamp. The range is '1970-01-01 00:00:01' UTC to '2038-01-19 03:14:07' UTC. | '2018-01-01 00:00:00' |
| TIME | A time. The range is '-838:59:59' to '838:59:59'. | '00:00:00' |
| YEAR | A year in 2-digit or 4-digit format. The valid range is 1901 to 2155, or 0000. | '2018' |
| JSON | A JSON document. | '{"name":"John", "age":30, "city":"New York"}' |

# Table Operations
- A table is a collection of related data entries and it consists of columns and rows.

#### Create a Table
- The CREATE TABLE statement is used to create a new table in a database.
- The table is created in the currently selected database, which is the default database unless another database is specified with a USE statement.
- Syntax
```sql
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

#### CREATE TABLE Example using PHP

```php
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$database = "database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "CREATE TABLE Persons (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table Persons created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
```
#### Drop Table
- The DROP TABLE statement is used to delete an existing table.
- Syntax:
```sql
DROP TABLE table_name;
```

#### Alter Table
- The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
- Syntax:
```sql
ALTER TABLE table_name
ADD column_name datatype;
```

#### Insert Data
- The INSERT INTO statement is used to insert new records in a table.
- Syntax:
```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

#### Update Data
- The UPDATE statement is used to modify the existing records in a table.
- Syntax:
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```
#### Delete Data
- The DELETE statement is used to delete existing records in a table.
- Syntax:
```sql
DELETE FROM table_name WHERE condition;
```

#### Select Data
```sql
SELECT column1, column2, ...
FROM table_name;
```

# PHPmyAdmin
- PHPMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.

-  Step 1: Download WAMP Server
-  Step 2: Install WAMP Server
-  Step 3: Start WAMP Server
-  Step 4: Open PHPMyAdmin
-  Step 5: Create Database
-  Step 6: Create Table
-  Step 7: Insert Data
-  Step 8: Update Data
-  Step 9: Delete Data
-  Step 10: Select Data

# PHP CRUD Operations
- CRUD stands for Create, Read, Update, and Delete.
- CRUD is a set of operations that are used to maintain data in a database.
- CRUD operations are used to maintain data in a database.

#### Create Data
- The CREATE operation is used to create new data in a database.
- Syntax:
```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

#### Read Data
- The READ operation is used to read data from a database.
- Syntax:
```sql
SELECT column1, column2, ...
FROM table_name;
```

#### Update Data
- The UPDATE operation is used to update existing data in a database.
- Syntax:
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

#### Delete Data
- The DELETE operation is used to delete existing data from a database.
- Syntax:
```sql
DELETE FROM table_name WHERE condition;
```

# PHP PDO
- PHP Data Objects (PDO) defines a lightweight, consistent interface for accessing databases in PHP.
- PDO is an extension that defines a consistent interface for accessing databases in PHP.
- PDO provides a data-access abstraction layer, which means, regardless of which database you're using, you use the same functions to issue queries and fetch data.
- PDO is an alternative to the MySQLi and MySQL (deprecated) extensions.
- PDO does not provide a database abstraction; it only defines an interface for accessing databases, which means that you need to use a database-specific PDO driver to access a database.

#### PDO Connection
- The PDO class represents a connection between PHP and a database server.
- Syntax:
```php
$servername = "localhost";
$username = "username";
$password = "password";
$database = "database_name";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
```

#### PDO Insert Data
- The PDO::prepare() method prepares a statement for execution and returns a statement object.
- Syntax:
```php
$sql = "INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...)";
```

#### PDO Update Data
- The PDO::prepare() method prepares a statement for execution and returns a statement object.
- Syntax:
```php
$sql = "UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition";
```

#### PDO Delete Data
- The PDO::prepare() method prepares a statement for execution and returns a statement object.
- Syntax:
```php
$sql = "DELETE FROM table_name WHERE condition";
```

#### PDO Select Data
- The PDO::prepare() method prepares a statement for execution and returns a statement object.
- Syntax:
```php
$sql = "SELECT column1, column2, ...
FROM table_name";
```
