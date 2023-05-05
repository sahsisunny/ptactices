# props

## What is props?

- Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another.
- But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child)
- Also, props data is read-only, which means that data coming from the parent should not be changed by child components.

## How to use props in React?

- Firstly, define an attribute and its value(data)
- Then pass it to child component(s) by using Props
- Finally, render the Props Data

## Example

- In this example, we have a parent component called `Person` and child component called `PersonDetails`.
- We are passing the data from parent component to child component using props.
- We are also passing the data from child component to parent component using props.

```js
import React from "react";
import "./App.css";
import PersonDetails from "./PersonDetails";

function App() {
  return (
    <div className="App">
      <Person name="John" age="25" />
      <Person name="Doe" age="30" />
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h1>
        My name is {props.name} and I am {props.age} years old!
      </h1>
      <PersonDetails name={props.name} />
    </div>
  );
}

export default App;
```

```js
import React from "react";

function PersonDetails(props) {
  return (
    <div className="person-details">
      <h1>My name is {props.name}</h1>
    </div>
  );
}

export default PersonDetails;
```
