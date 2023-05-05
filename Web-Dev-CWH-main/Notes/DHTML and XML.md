# DHTML and XML

# DHTML

#### What is DHTML?
- DHTML is a combination of HTML, CSS and JavaScript.
- It is used to create interactive and dynamic web pages.
- DHTML is a superset of HTML and CSS.
- CSS is used to style the web page.
- JavaScript is used to add interactivity to the web page.

#### What is the difference between HTML and DHTML?
| HTML | DHTML |
| --- | --- |
| HTML is a markup language. | DHTML is a combination of HTML, CSS and JavaScript. |
| HTML is used to create static web pages. | DHTML is used to create interactive and dynamic web pages. |
| HTML is a subset of DHTML. | DHTML is a superset of HTML and CSS. |
| HTML is used to create the structure of the web page. | DHTML is used to create the structure, style and interactivity of the web page. |
| HTML is used to create the content of the web page. | DHTML is used to create the content of the web page. |
| HTML is used to create the layout of the web page. | DHTML is used to create the layout of the web page. |
| HTML is used to create the presentation of the web page. | DHTML is used to create the presentation of the web page. |

#### Advantages of DHTML
- DHTML is easy to learn, use, and implement.
- DHTML is platform independent.
- DHTML is easy to maintain, debug and update.
- DHTML is compatible with all the browsers.
- DHTML is faster than other web technologies.
- DHTML is more secure than other web technologies.

# Docuement Object Model (DOM)
- DOM is a programming interface for HTML and XML documents.
- DOM represents the document as nodes and objects.
- DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
- DOM is an application programming interface (API) for valid HTML and well-formed XML documents.
- DOM is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure and style of a document.

#### DOM Tree
- DOM tree is a tree-like structure of nodes.
- DOM tree is a representation of the HTML document.
- DOM tree is a hierarchical representation of the HTML document.
- DOM tree is a model of the HTML document.
- DOM tree is a visual representation of the HTML document.

#### DOM Tree Nodes
- DOM tree nodes are the elements of the DOM tree.
- DOM tree nodes are the nodes of the DOM tree.
- DOM tree nodes are the objects of the DOM tree.
- DOM tree nodes are the elements of the HTML document.
- DOM tree nodes are the nodes of the HTML document.
- DOM tree nodes are the objects of the HTML document.

#### DOM Tree Node Types
- DOM tree node types are the types of the DOM tree nodes.

| Node Type | Description |
| --- | --- |
| Element | An element node like `<p>` or `<div>`. |
| Attribute | An attribute of an Element. |
| Text | The text inside an Element or Attr. |
| Comment | A comment inside the document. |
| Document | The document node. |
| DocumentType | The document type node. |
| DocumentFragment | A lightweight version of Document that can hold a portion of a document. |
| Notation | A notation declared in the DTD. |

#### DOM Tree Node Relationships
- DOM tree node relationships are the relationships between the DOM tree nodes.

| Relationship | Description |
| --- | --- |
| Parent | The parent of a node is the containing element. |
| Child | The child of a node can be an element or text within that element. |
| Sibling | The sibling of a node is a node with the same parent. |
| Ancestor | The ancestor of a node is a parent, grandparent, great-grandparent, and so on. |
| Descendant | The descendant of a node is a child, grandchild, great-grandchild, and so on. |

#### DOM Tree Node Properties
- DOM tree node properties are the properties of the DOM tree nodes.

| Property | Description |
| --- | --- |
| nodeName | The name of the node. |
| nodeValue | The value of the node. |
| nodeType | The type of the node. |
| parentNode | The parent of the node. |
| childNodes | A collection of all child nodes. |
| firstChild | The first child of the node. |
| lastChild | The last child of the node. |
| previousSibling | The node immediately preceding this node. |
| nextSibling | The node immediately following this node. |
| attributes | A collection of all attributes of the node. |
| ownerDocument | The document that the node belongs to. |

#### DOM Tree Node Methods
- DOM tree node methods are the methods of the DOM tree nodes.

| Method | Description |
| --- | --- |
| appendChild() | Adds a node to the end of the list of children of a specified parent node. |
| cloneNode() | Creates a copy of a node. |
| hasChildNodes() | Returns true if a node has any child nodes, otherwise false. |
| insertBefore() | Inserts a new node before a reference node as a child of a specified parent node. |
| removeChild() | Removes a child node from the list of children of a specified parent node. |
| replaceChild() | Replaces a child node in the list of children of a specified parent node with a new node. |

#### DOM Tree Node Events
- DOM tree node events are the events of the DOM tree nodes.

| Event | Description |
| --- | --- |
| DOMActivate | Fires when the user clicks on an object. |
| DOMAttrModified | Fires when an attribute has been modified, added, or removed. |
| DOMCharacterDataModified | Fires when the character data of a node has been changed. |
| DOMFocusIn | Fires when an element has received focus. |
| DOMFocusOut | Fires when an element has lost focus. |
| DOMNodeInserted | Fires when a node has been added as a child of another node. |
| DOMNodeInsertedIntoDocument | Fires when a node has been added to a document. |
| DOMNodeRemoved | Fires when a node has been removed from its parent node. |
| DOMNodeRemovedFromDocument | Fires when a node has been removed from a document. |
| DOMSubtreeModified | Fires when the subtree of a node has been modified. |

#### DOM Tree Node Examples
- DOM tree node examples are the examples of the DOM tree nodes.

| Example | Description |
| --- | --- |
| document | The document node. |
| document.documentElement | The root element of the document. |
| document.body | The body element of the document. |
| document.head | The head element of the document. |
| document.title | The title element of the document. |
| document.images | A collection of all img elements in the document. |
| document.links | A collection of all a elements with a href attribute in the document. |
| document.forms | A collection of all form elements in the document. |
| document.scripts | A collection of all script elements in the document. |


# Event handling in DHTML
- Event handling in DHTML is the process of responding to user actions such as mouse clicks, form input, and page navigation.

#### Types of Events
- Types of events are the types of the events.

| Event Type | Description |
| --- | --- |
| Mouse Events | Mouse events are triggered by mouse actions such as mouse clicks, mouse movements, and mouse over. |
| Keyboard Events | Keyboard events are triggered by keyboard actions such as key presses and key releases. |
| Form Events | Form events are triggered by form actions such as form submission and form reset. |
| Window Events | Window events are triggered by window actions such as window load and window unload. |
| Document Events | Document events are triggered by document actions such as document load and document unload. |

#### Mouse Event Handlers
- Mouse event handlers are the event handlers of the mouse events.

| Event Handler | Description |
| --- | --- |
| onclick | Fires when the user clicks on an element. |
| ondblclick | Fires when the user double-clicks on an element. |
| onmousedown | Fires when the user presses a mouse button over an element. |
| onmousemove | Fires when the user moves the mouse over an element. |
| onmouseout | Fires when the user moves the mouse away from an element. |
| onmouseover | Fires when the user moves the mouse over an element. |
| onmouseup | Fires when the user releases a mouse button over an element. |

#### Keyboard Event Handlers
- Keyboard event handlers are the event handlers of the keyboard events.

| Event Handler | Description |
| --- | --- |
| onkeydown | Fires when the user is pressing a key. |
| onkeypress | Fires when the user presses a key. |
| onkeyup | Fires when the user releases a key. |

#### Form Event Handlers
- Form event handlers are the event handlers of the form events.

| Event Handler | Description |
| --- | --- |
| onblur | Fires when an element loses focus. |
| onchange | Fires the first time the value of a field is changed. |
| onfocus | Fires when an element gets focus. |
| onreset | Fires when a form is reset. |
| onselect | Fires when a user selects some text in a text field. |
| onsubmit | Fires when a form is submitted. |

#### Window Event Handlers
- Window event handlers are the event handlers of the window events.

| Event Handler | Description |
| --- | --- |
| onload | Fires when a page has loaded. |
| onunload | Fires when a page has unloaded. |

#### Document Event Handlers
- Document event handlers are the event handlers of the document events.

| Event Handler | Description |
| --- | --- |
| onabort | Fires when a document has been aborted. |
| onerror | Fires when a document has encountered an error. |
| onresize | Fires when a document view is resized. |
| onscroll | Fires when a document view is scrolled. |

#### Event Object Properties
- Event object properties are the properties of the event objects.

| Property | Description |
| --- | --- |
| altKey | Returns true if the "ALT" key was pressed when the mouse event was triggered. |
| button | Returns which mouse button was pressed when a mouse event was triggered. |
| clientX | Returns the horizontal coordinate of the mouse pointer when a mouse event was triggered. |
| clientY | Returns the vertical coordinate of the mouse pointer when a mouse event was triggered. |
| ctrlKey | Returns true if the "CTRL" key was pressed when the mouse event was triggered. |
| keyCode | Returns the code of the key that was pressed when a keyboard event was triggered. |
| metaKey | Returns true if the "META" key was pressed when the mouse event was triggered. |
| relatedTarget | Returns the related target of the event. |
| screenX | Returns the horizontal coordinate of the mouse pointer when a mouse event was triggered. |
| screenY | Returns the vertical coordinate of the mouse pointer when a mouse event was triggered. |
| shiftKey | Returns true if the "SHIFT" key was pressed when the mouse event was triggered. |
| srcElement | Returns the element that triggered the event. |
| target | Returns the element that triggered the event. |
| which | Returns which key or mouse button was pressed when an event was triggered. |

#### Event Object Methods
- Event object methods are the methods of the event objects.

| Method | Description |
| --- | --- |
| preventDefault() | Cancels the default action of an event. |
| stopPropagation() | Prevents the event from bubbling up the DOM tree. |

#### Event Object Examples
- Event object examples are the examples of the event objects.

| Example | Description |
| --- | --- |
| event.altKey | Returns true if the "ALT" key was pressed when the mouse event was triggered. |
| event.button | Returns which mouse button was pressed when a mouse event was triggered. |
| event.clientX | Returns the horizontal coordinate of the mouse pointer when a mouse event was triggered. |
| event.clientY | Returns the vertical coordinate of the mouse pointer when a mouse event was triggered. |
| event.ctrlKey | Returns true if the "CTRL" key was pressed when the mouse event was triggered. |
| event.keyCode | Returns the code of the key that was pressed when a keyboard event was triggered. |
| event.metaKey | Returns true if the "META" key was pressed when the mouse event was triggered. |
| event.relatedTarget | Returns the related target of the event. |
| event.screenX | Returns the horizontal coordinate of the mouse pointer when a mouse event was triggered. |
| event.screenY | Returns the vertical coordinate of the mouse pointer when a mouse event was triggered. |
| event.shiftKey | Returns true if the "SHIFT" key was pressed when the mouse event was triggered. |
| event.srcElement | Returns the element that triggered the event. |
| event.target | Returns the element that triggered the event. |
| event.which | Returns which key or mouse button was pressed when an event was triggered. |
| event.preventDefault() | Cancels the default action of an event. |
| event.stopPropagation() | Prevents the event from bubbling up the DOM tree. |

#### Event Object Example
```html
     <!DOCTYPE html>
     <html>
     <body>
     
     <p>Click the button to display the event object properties.</p>
     
     <button onclick="myFunction(event)">Try it</button>
     
     <p id="demo"></p>
     
     <script>
     function myFunction(e) {
       var txt = "";
       txt += "altKey: " + e.altKey + "\n";
       txt += "bubbles: " + e.bubbles + "\n";
       txt += "button: " + e.button + "\n";
       txt += "buttons: " + e.buttons + "\n";
       txt += "cancelBubble: " + e.cancelBubble + "\n";
       txt += "cancelable: " + e.cancelable + "\n";
       txt += "clientX: " + e.clientX + "\n";
       txt += "clientY: " + e.clientY + "\n";
       txt += "composed: " + e.composed + "\n";
       txt += "ctrlKey: " + e.ctrlKey + "\n";
       txt += "currentTarget: " + e.currentTarget + "\n";
       txt += "defaultPrevented: " + e.defaultPrevented + "\n";
       txt += "detail: " + e.detail + "\n";
       txt += "eventPhase: " + e.eventPhase + "\n";
       txt += "fromElement: " + e.fromElement + "\n";
       txt += "isTrusted: " + e.isTrusted + "\n";
       txt += "layerX: " + e.layerX + "\n";
       txt += "layerY: " + e.layerY + "\n";
       txt += "metaKey: " + e.metaKey + "\n";
       txt += "movementX: " + e.movementX + "\n";
       txt += "movementY: " + e.movementY + "\n";
       txt += "offsetX: " + e.offsetX + "\n";
       txt += "offsetY: " + e.offsetY + "\n";
       txt += "pageX: " + e.pageX + "\n";
       txt += "pageY: " + e.pageY + "\n";
       txt += "path: " + e.path + "\n";
       txt += "returnValue: " + e.returnValue + "\n";
       txt += "screen": " + e.screen + "\n";
       txt += "screenX: " + e.screenX + "\n";
       txt += "screenY: " + e.screenY + "\n";
       txt += "shiftKey: " + e.shiftKey + "\n";
       txt += "sourceCapabilities: " + e.sourceCapabilities + "\n";
       txt += "srcElement: " + e.srcElement + "\n";
       txt += "target: " + e.target + "\n";
       txt += "timeStamp: " + e.timeStamp + "\n";
       txt += "toElement: " + e.toElement + "\n";
       txt += "type: " + e.type + "\n";
       txt += "view: " + e.view + "\n";
       txt += "which: " + e.which + "\n";
       txt += "x: " + e.x + "\n";
          

```

#### Event Object Example Explained
- The example above shows how to display the event object properties.


