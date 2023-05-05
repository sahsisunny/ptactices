# AJAX

#### What is AJAX?

- AJAX stands for Asynchronous JavaScript and XML.
- AJAX is not a programming language.
- AJAX just uses a combination of:
  - A browser built-in XMLHttpRequest object (to request data from a web server)
  - JavaScript and HTML DOM (to display or use the data)
- AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

#### AJAX - How It Works

- An event occurs in a web page (the page is loaded, a button is clicked)
- An XMLHttpRequest object is created by JavaScript
- The XMLHttpRequest object sends a request to a web server
- The server processes the request
- The server sends a response back to the web page
- The response is read by JavaScript
- Proper action (like page update) is performed by JavaScript

#### AJAX - Advantages

- AJAX is a user-friendly technique.
- AJAX is faster than the traditional web page (which always reloads the whole page).
- AJAX is more interactive than the traditional web page (which never communicates with the server once loaded).

#### AJAX - Disadvantages

- AJAX does not work without JavaScript.
- AJAX does not work without XML.
- AJAX requires a modern browser.
- AJAX is more difficult to implement than a traditional web page.

#### AJAX - Example

- The following example demonstrates how to use AJAX to load data from a server and display it in a web page:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Load data from a server</h2>

    <button type="button" onclick="loadDoc()">Request data</button>

    <p id="demo"></p>

    <script>
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "ajax_info.txt", true);
        xhttp.send();
      }
    </script>
  </body>
</html>
```

- The example above uses the following files:
  - ajax_info.txt (the file that contains the data to be displayed in the page)
  - ajax.js (the file that contains the JavaScript code)
- The example above will not work if you run it locally on your computer. You must upload it to a web server to make it work.

#### AJAX - XMLHttpRequest Object

- The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
- The XMLHttpRequest object is provided by the browser's JavaScript environment.
- All modern browsers (including IE7 and IE8) have a built-in XMLHttpRequest object.
- The XMLHttpRequest object is a developer's dream, because you can:
  - Update a web page without reloading the page
  - Request data from a server - after the page has loaded
  - Receive data from a server - after the page has loaded
  - Send data to a server - in the background
