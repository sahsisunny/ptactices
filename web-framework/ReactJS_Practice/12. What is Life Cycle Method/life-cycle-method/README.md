# WHat is Life Cycle Method

## Life Cycle Method

- In React, there are three phases of component life cycle

  - Mounting
  - Updating
  - Unmounting

- Mounting

  - When an instance of a component is being created and inserted into the DOM it occurs during mounting.
  - These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    - constructor()
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()

- Updating

  - Anytime a component is updated or state changes then it is rerendered.
  - These methods are called in the following order when a component is being re-rendered:
  - static getDerivedStateFromProps()
  - shouldComponentUpdate()
  - render()
  - getSnapshotBeforeUpdate()
  - componentDidUpdate()

- Unmounting
  - The final phase of the life cycle if called when a component is being removed from the DOM.
  - componentWillUnmount()

## Important Life Cycle Methods

- constructor()
  - The constructor for a React component is called before it is mounted.
  - When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement.
  - Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
  - The constructor is the right place to initialize state.
  - Don't call setState() here!
  - Instead, if your component needs to use local state, assign the initial state to this.state directly in the constructor:
  - Don't copy props into state! This is a common mistake:
  - Instead of doing this, you should determine what the value of the state should be based solely on the props and a possible initial state:
  - The constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
- static getDerivedStateFromProps()

#
