# state

## What is state?

- State is a JS object that contains data relevant to a component.
- Updating 'state' on a component causes the component to (almost) instantly re-render.
- State must be initialized when a component is created.
- State can only be updated using the function 'setState'.

## How do we use state in a class component?

- We use the constructor function to initialize state.
- We use 'setState' to update the state object.

## Rules of State

- Only usable with class components
- 'You will confuse props with state'
- 'State is a JS object that contains data relevant to a component'
- 'Updating 'state' on a component causes the component to (almost) instantly re-render'
- 'State must be initialized when a component is created'
- 'State can only be updated using the function 'setState''
- 'State can contain any data a component might need'

## How do we initialize state in the constructor?

- We add a constructor function to the class component.
- We call 'super' on the props object.
- We assign 'this.state' to our initial state object.

## How do we update state?

- We call 'this.setState' with an object.
- That object will be merged with the current state.
- The component will re-render.
- We can pass a callback to setState as a second argument.
- That callback will fire after state has been updated and the component has re-rendered.

## update state on button click

- We can use an arrow function to create an event handler.
- We can pass that event handler to an event listener.
- We can use 'this.setState' to update state.
