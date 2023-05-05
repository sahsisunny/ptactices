# Java Notes

# Variables in Java
- Variables are containers that store values.
- Variables are declared with a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.
- The declaration of a variable includes the variable's name, which is any legal identifier, and the variable's type, which is any valid Java type.
- The declaration of a variable can include an initialization, which consists of an initial value for the variable that is specified by an expression.
- The declaration of a variable can include a modifier, which is a keyword that precedes the type.
- The declaration of a variable can include an annotation, which is a special kind of comment that provides additional information to the compiler.

## Variable Types
- Instance Variables (Non-Static Fields)
- Class Variables (Static Fields)
- Local Variables
- Parameters

### Instance Variables (Non-Static Fields)
- Instance variables are declared in a class, but outside a method, constructor or any block.
- When a space is allocated for an object in the heap, a slot for each instance variable value is created.
- Instance variables are created when an object is created with the use of the keyword new and they are destroyed when the object is destroyed.
- Instance variables hold values that must be referenced by more than one method, constructor or block, or essential parts of an object's state that must be present throughout the class.
- Example:
```java
public class Employee {
   // this instance variable is visible for any child class.
   public String name;

   // salary  variable is visible in Employee class only.
   private double salary;

   // The name variable is assigned in the constructor.
   public Employee (String empName) {
      name = empName;
   }

   // The salary variable is assigned a value.
   public void setSalary(double empSal) {
      salary = empSal;
   }

   // This method prints the employee details.
   public void printEmp() {
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]) {
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

### Class Variables (Static Fields)
- Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block.
- There would only be one copy of each class variable per class, regardless of how many objects are created from it.
- Memory for such variables is allocated only once when the class is loaded.
- Class variables are rarely used other than being declared as constants. Constants are variables that are declared as public/private, final, and static. Constant variables never change from their initial value.
- Example:
```java
public class Employee {
   // salary  variable is a private static variable
   private static double salary;

   // DEPARTMENT is a constant
   public static final String DEPARTMENT = "Development ";

   public static void main(String args[]) {
      salary = 1000;
      System.out.println(DEPARTMENT + "average salary:" + salary);
   }
}
```

### Local Variables
- Variables defined within a method, constructor or block are called local variables.
- The variable will be declared and initialized within the method and the variable will be destroyed when the method has completed.
- Access modifiers cannot be used for local variables.
- Local variables are visible only within the declared method, constructor, or block.
- Local variables are implemented at stack level internally.
- Example:
```java
public class Employee {
   // this instance variable is visible for any child class.
   public String name;

   // salary  variable is visible in Employee class only.
   private double salary;

   // The name variable is assigned in the constructor.
   public Employee (String empName) {
      name = empName;
   }

   // The salary variable is assigned a value.
   public void setSalary(double empSal) {
      salary = empSal;
   }

   // This method prints the employee details.
   public void printEmp() {
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]) {
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

### Parameters
- Parameters are variables that are passed into methods.
- Parameters behave like regular variables except that they are declared with the method signature.
- Parameters are also called method arguments.
- Example:
```java
public class Employee {
   // this instance variable is visible for any child class.
   public String name;

   // salary  variable is visible in Employee class only.
   private double salary;

   // The name variable is assigned in the constructor.
   public Employee (String empName) {
      name = empName;
   }

   // The salary variable is assigned a value.
   public void setSalary(double empSal) {
      salary = empSal;
   }

   // This method prints the employee details.
   public void printEmp() {
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]) {
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

## Variable Scope
- The scope of a variable determines the portion of the program where you can declare the variable.
- There are three types of scopes:
  - Class Scope
  - Instance Scope
  - Method Scope

### Class Scope
- A class variable is any variable declared with the static modifier; these variables are called class variables.
- Class variables are also called static variables.
- A class variable is any field declared with the static modifier; this applies to both instance variables and class variables.
- Class variables are shared by all instances of the class; there is only one copy of a class variable per class, regardless of how many times an instance of the class is created.
- Class variables are declared with the static keyword in a class, but outside a method, constructor or a block.
- Class variables are created when the program begins and destroyed when the program ends.
- Class variables cannot be local.
- Class variables can be accessed by calling with the class name ClassName.VariableName.
- Example:
```java
public class Employee {
   // salary  variable is a private static variable
   private static double salary;

   // DEPARTMENT is a constant
   public static final String DEPARTMENT = "Development ";

   public static void main(String args[]) {
      salary = 1000;
      System.out.println(DEPARTMENT + "average salary:" + salary);
   }
}
```

### Instance Scope
- Instance variables are declared in a class, but outside a method, constructor or any block.
- When a space is allocated for an object in the heap, a slot for each instance variable value is created.
- Instance variables are created when an object is created with the use of the keyword new and they are destroyed when the object is destroyed.
- Instance variables hold values that must be referenced by more than one method, constructor or block, or essential parts of an object's state that must be present throughout the class.
- Example:
```java
public class Employee {
   // this instance variable is visible for any child class.
   public String name;

   // salary  variable is visible in Employee class only.
   private double salary;

   // The name variable is assigned in the constructor.
   public Employee (String empName) {
      name = empName;
   }

   // The salary variable is assigned a value.
   public void setSalary(double empSal) {
      salary = empSal;
   }

   // This method prints the employee details.
   public void printEmp() {
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]) {
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

### Method Scope
- Variables declared within a method, constructor or block are called local variables.
- The variable will be declared and initialized within the method and the variable will be destroyed when the method has completed.
- Access modifiers cannot be used for local variables.
- Local variables are visible only within the declared method, constructor, or block.
- Local variables are implemented at stack level internally.
- Example:
```java
public class Employee {
   // this instance variable is visible for any child class.
   public String name;

   // salary  variable is visible in Employee class only.
   private double salary;

   // The name variable is assigned in the constructor.
   public Employee (String empName) {
      name = empName;
   }

   // The salary variable is assigned a value.
   public void setSalary(double empSal) {
      salary = empSal;
   }

   // This method prints the employee details.
   public void printEmp() {
      System.out.println("name  : " + name );
      System.out.println("salary :" + salary);
   }

   public static void main(String args[]) {
      Employee empOne = new Employee("Ransika");
      empOne.setSalary(1000);
      empOne.printEmp();
   }
}
```

## Data Types in Java
- Java is a strongly typed language, which means that all variables must first be declared before they can be used.
- Java is a statically typed language, which means that all variables must first be declared before they can be used.

### Types of Data Types
- Primitive Data Types
- Non-Primitive Data Types

### Primitive Data Types
- Primitive data types are predefined by the language and named by a keyword.        
- There are eight primitive data types in Java.
- byte, short, int, long, float, double, boolean and char.
- Example:
```java
public class PrimitiveDataTypes {
   public static void main(String args[]) {
      byte a = 10;
      short b = 20;
      int c = 30;
      long d = 40;
      float e = 50.0f;
      double f = 60.0d;
      boolean g = true;
      char h = 'i';
   }
}
```

### Non-Primitive Data Types
- Non-primitive data types are created by the programmer and not defined by the language.
- Non-primitive data types include Classes, Interfaces, and Arrays.
- Example:
```java
public class NonPrimitiveDataTypes {
   public static void main(String args[]) {
      String a = "Hello";
      Integer b = 15;
      Float c = 20.5f;
      Character d = 'd';
   }
}
```
# Input in Java
- Java provides a class called Scanner to get user input, and it is found in the java.util package.
- To use the Scanner class, create an object of the class and use any of the available methods found in the Scanner class documentation.
- Example:
```java
import java.util.Scanner;  // Import the Scanner class

public class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);  // Create a Scanner object
    System.out.println("Enter username");

    String userName = myObj.nextLine();  // Read user input
    System.out.println("Username is: " + userName);  // Output user input
  }
}
```
### Scanner Methods
- nextLine() - Reads a line of text. Ex - "Hello World"
- nextInt() - Reads an integer. Ex - 42
- nextFloat() - Reads a floating point number. Ex - 3.14
- nextDouble() - Reads a double. Ex - 3.14
- nextBoolean() - Reads a boolean. Ex - TRUE
- nextByte() - Reads a byte. Ex - 123
- nextShort() - Reads a short. Ex - 123
- nextLong() - Reads a long. Ex - 123
- next() - Reads a string. Ex - "Hello World"

# Type Casting in Java
- Type casting is when you assign a value of one primitive data type to another type.
- There are two types of type casting: implicit and explicit.
- Implicit Casting (automatically) - converting a smaller type to a larger type size
- Explicit Casting (manually) - converting a larger type to a smaller size type

### Implicit Casting
- Implicit casting is done automatically when passing a smaller size type to a larger size type.
- Example:
```java
public class ImplicitCasting {
   public static void main(String args[]) {
      int myInt = 9;
      double myDouble = myInt; // Automatic casting: int to double

      System.out.println(myInt);      // Outputs 9
      System.out.println(myDouble);   // Outputs 9.0
   }
}
```

### Explicit Casting
- Explicit casting must be done manually by placing the type in parentheses in front of the value.
- Example:
```java
public class ExplicitCasting {
   public static void main(String args[]) {
      double myDouble = 9.78;
      int myInt = (int) myDouble; // Manual casting: double to int

      System.out.println(myDouble);   // Outputs 9.78
      System.out.println(myInt);      // Outputs 9
   }
}
```

# Type Promotion in Expressions in Java
- When an expression contains values of mixed types, Java automatically promotes each value to the largest of the data types used in the expression.
- Example:
```java
public class TypePromotion {
   public static void main(String args[]) {
      byte b = 42;
      char c = 'a';
      short s = 1024;
      int i = 50000;
      float f = 5.67f;
      double d = .1234;
      double result = (f * b) + (i / c) - (d * s);
      // result is 1181.2979
      System.out.println((f * b) + " + " + (i / c) + " - " + (d * s));
      System.out.println("result = " + result);
   }
}
```
