# Day 3 Automated Testing

- Automated testing is a critical part of any software development process. It is a way to ensure that your code is working as expected and that it does not break when you make changes to it. It is also a way to ensure that your code is working as expected in a variety of situations. For example, you may have written code that works in a development environment, but it may not work in a production environment. Automated testing can help you catch these issues before they become a problem.

- In this section, we will cover the following topics:

  - What is automated testing?
  - Why is automated testing important?
  - How to write automated tests
  - How to run automated tests

## What is automated testing?

- Automated testing is a way to test your code without having to manually run it. Instead, you write tests that will run your code for you and verify that it is working as expected. This is a great way to ensure that your code is working as expected and that it does not break when you make changes to it.

## Why is automated testing important?

- Automated testing is a critical part of any software development process. It is a way to ensure that your code is working as expected and that it does not break when you make changes to it. It is also a way to ensure that your code is working as expected in a variety of situations. For example, you may have written code that works in a development environment, but it may not work in a production environment. Automated testing can help you catch these issues before they become a problem.

## How to write automated tests

- Automated tests are written in a variety of ways. The most common way is to use a testing framework. A testing framework is a library that provides a set of tools for writing tests. There are many different testing frameworks available, and each one has its own set of features and benefits. In this section, we will cover some of the most popular testing frameworks.

### Some Testing Frameworks

1. [Jest](https://jestjs.io/) - It is used for testing JavaScript, React, and Vue applications.
2. [Mocha](https://mochajs.org/) - It is used for testing JavaScript applications.
3. [Puppeteer](https://puppeteer.dev/) - It is used for testing web applications which use JavaScript.
4. [Cypress](https://www.cypress.io/) - It is used for testing web applications which use JavaScript.

## How to run automated tests

- Once you have written your tests, you need to run them. There are a few different ways to run your tests. The most common way is to use a testing framework. A testing framework is a library that provides a set of tools for writing tests. There are many different testing frameworks available, and each one has its own set of features and benefits. In this section, we will cover some of the most popular testing frameworks.

# Automated Testing in Ember JS

- Testing the Ember JS Application is very easy. Ember JS provides a testing framework called [QUnit](https://qunitjs.com/). QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!

- Follow the steps below to write automated tests for your Ember JS application.
  - Install the QUnit testing framework.
  - Write your tests.
  - Run your tests.
- When creating a new Ember JS application, the QUnit testing framework is installed by default. If you are using an existing Ember JS application, you can install the QUnit testing framework by running the following command in your terminal:

```bash
ember install ember-qunit
```

- Once you have installed the QUnit testing framework, you can write your tests. The QUnit testing framework provides a set of tools for writing tests. You can use these tools to write your tests. The most common way is to use a testing framework. A testing framework is a library that provides a set of tools for writing tests. There are many different testing frameworks available, and each one has its own set of features and benefits. In this section, we will cover some of the most popular testing frameworks.

- Following command is used to get the boilerplate code for the test file.

```bash
ember generate <type> <name>
```

Example:

```bash
ember generate acceptance-test super-rentals
```

- `ember generate` is used to generate boilerplate code for a new file.
- `acceptance-test` is the type of file you want to generate.
- `super-rentals` is the name of the file you want to generate.

- The above command will generate a file called `super-rentals-test.js` in the `tests/acceptance` directory. This file contains the boilerplate code for your test. You can use this file to write your tests.

- Above command generate a file called `super-rentals-test.js` in the `tests/acceptance` directory. This file contains the boilerplate code for your test. You can use this file to write your tests.

```js
import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | super rentals", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting /super-rentals", async function (assert) {
    await visit("/super-rentals");

    assert.equal(currentURL(), "/super-rentals");
  });
});
```

- The above code is the boilerplate code for your test. You can use this code to write your tests. The code above is a test that visits the `/super-rentals` route and verifies that the URL is `/super-rentals`. You can write your own tests by replacing the code above with your own code.

## QUnit Basic Syntax

Step 1: Import the QUnit module

```js
import { module, test } from "qunit";
```

Step 2: Import the test helpers

```js
import { visit, currentURL } from "@ember/test-helpers";
```

Step 3: Import the setupApplicationTest helper

```js
import { setupApplicationTest } from "ember-qunit";
```

Step 4: Create a module

```js
module("Acceptance | super rentals", function (hooks) {
  setupApplicationTest(hooks);
});
```

- The first argument is the name of the module. This name is used to group related tests together. In this case, we are grouping all of the tests related to the `super-rentals` route together. The second argument is a function that contains the tests for the module. This function is called a "hook" function. The `hooks` argument is used to access the hook functions.

Step 5: Create a test

```js
test("visiting /super-rentals", async function (assert) {
  await visit("/super-rentals");

  assert.equal(currentURL(), "/super-rentals");
});
```

- `test` is the function used to create a test. The first argument is the name of the test. This name is used to identify the test. The second argument is a function that contains the code for the test. This function is called a "test" function. The `assert` argument is used to access the test functions.
- 'visiting /super-rentals' is the name of the test. This name is used to identify the test.
- `assert` is an object that contains all of the test functions. You can use this object to access the test functions.
- `await` is a keyword that is used to wait for the `visit` function to finish executing before continuing to the next line of code.
- `visit` is a test helper function that is used to visit a route. The argument is the name of the route you want to visit.
- 'super-rentals' is the name of the route you want to visit. This name is used to identify the route.
- `equal` is a test function that is used to verify that two values are equal. The first argument is the actual value. The second argument is the expected value.
- `currentURL` is a test helper function that is used to get the current URL. This function returns the current URL as a string.
- `async` is a keyword that is used to mark a function as asynchronous. This keyword is used in conjunction with the `await` keyword.

Step 6: Run the tests

- `ember test --server` or `ember t -s`
  - `test` or `t` is an option that is used to run the tests.
  - `--server` or `-s` is an option that is used to run the tests in a server.

After running the above command, you will see the following output in your terminal:

```bash
TEST'EM 'SCRIPTS!
Open the URL below in a browser to connect.
http://localhost:7357/
--------------+
     Chrome  |
    4/4 v     |+----------------------------------------------------------------------------------------------------+



✔ 4 tests complete.
[Press ENTER to run tests; q to quit; p to pause]
```
