# WH Assignment
## PHP
### Write a PHP script to print the prime numbers between 1 to 100.
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

### Write a PHP script to find the factorial of a number.
#### Ans-
```php
<?php
function fact($n)
{
    if($n==0)
    {
        return 1;
    }
    else
    {
        return $n*fact($n-1);
    }
}
echo fact(5);
?>
```
- **input**
    - 5
- **output**
     - 120

### Write a PHP script to sort an array in ascending order without using sort() function.
#### Ans-
```php
<?php
$arr=array(1,2,3,4,5,6,7,8,9,10);
for($i=0;$i<10;$i++)
{
    for($j=$i+1;$j<10;$j++)
    {
        if($arr[$i]>$arr[$j])
        {
            $temp=$arr[$i];
            $arr[$i]=$arr[$j];
            $arr[$j]=$temp;
        }
    }
}
for($i=0;$i<10;$i++)
{
    echo $arr[$i]." ";
}
?>
```
- **input**
    - 1 2 3 4 5 6 7 8 9 10
- **output**
     - 1 2 3 4 5 6 7 8 9 10

### Write a PHP script to find the sum of the series 1 + 1/2 + 1/3 + 1/4 + 1/5 + ….. + 1/N.
#### Ans-
```php
<?php

function sum($n)
{
    $sum=0;
    for($i=1;$i<=$n;$i++)
    {
        $sum=$sum+(1/$i);
    }
    return $sum;
}
echo sum(5);
?>
```
- **input**
    - 5
- **output**
     - 2.2833333333333

### Write a PHP script to find the sum of the series 1 + 11 + 111 + 1111 + 11111 + .. n terms.
#### Ans-
```php
<?php
function sum($n)
{
    $sum=0;
    $num=1;
    for($i=1;$i<=$n;$i++)
    {
        $sum=$sum+$num;
        $num=$num*10+1;
    }
    return $sum;
}
echo sum(5);
?>
```
- **input**
    - 5
- **output**
     - 12345

### Write a PHP script to connect to the MySQL database Using MySQLi extension.
#### Ans-
```php
<?php
//Using MySQLi extension

$conn=new mysqli("localhost","root","","test");
if($conn->connect_error)
{
    die("Connection failed: ".$conn->connect_error);
}
echo "Connected successfully";
$conn->close();
?>
```

### Write a PHP script to create a table in MySQL database Using MySQLi extension.
#### Ans-
```php
<?php
$servername="localhost";
$username="root";
$password="";
$dbname="test";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error)
{
    die("Connection failed: ".$conn->connect_error);
}
$sql="CREATE TABLE student(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";
if($conn->query($sql)===TRUE)
{
    echo "Table student created successfully";
}
else
{
    echo "Error creating table: ".$conn->error;
}
$conn->close();
?>
```


### Write a PHP script to insert data into MySQL database.
#### Ans-
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // sql to create table
  $sql = "INSERT INTO MyGuests (firstname, lastname, email)
  VALUES ('John', 'Doe', 'john@gmail.com')";
     // use exec() because no results are returned
     $conn->exec($sql);
     echo "New record created successfully";
} catch(PDOException $e) {
     echo $sql . "<br>" . $e->getMessage();
     }

$conn = null;
?>
```

### Write a PHP script to select data from MySQL database.
#### Ans-
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT id, firstname, lastname FROM MyGuests");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
    echo $v;
  }
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;

echo "</table>";
?>

<?php
class TableRows extends RecursiveIteratorIterator {
  function __construct($it) {
    parent::__construct($it, self::LEAVES_ONLY);
  }

  function current() {
    return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
  }

  function beginChildren() {
    echo "<tr>";
  }

  function endChildren() {
    echo "</tr>" . "\n";
  }
}
?>
```

### Write a PHP script to update data in MySQL database.
#### Ans-
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // sql to create table
  $sql = "UPDATE MyGuests SET lastname='Doe' WHERE id=2";

  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

  // echo a message to say the UPDATE succeeded
  echo $stmt->rowCount() . " records UPDATED successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```

### Write a PHP script to delete data from MySQL database.
#### Ans-
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // sql to create table
  $sql = "DELETE FROM MyGuests WHERE id=3";

  // Prepare statement
  $stmt = $conn->prepare($sql);

  // execute the query
  $stmt->execute();

  // echo a message to say the UPDATE succeeded
  echo $stmt->rowCount() . " records DELETED successfully";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
```

### Write a PHP script to login the user into the system.
#### Ans-
```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
```

