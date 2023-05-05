import React from 'react';

export default class Profile extends React.Component {
     constructor() {
          super();
          this.state = {      // State is a special property of a class component which is used to store the data of a component.
               name: 'Sunny Sahsi',
               email: 'sahsisunny@gmail.com',
          }
     }
     updateState() {
          this.setState({ name: 'Sunny Gupta(Fun)' })  // setState is a function which is used to update the state of a component.
          this.setState({ email: 'sunnysahsi01@gmail.com' })
     }
     render() {
          return (
               <div>
                    <h1>Hello {this.state.name}</h1>
                    <h2>Email : {this.state.email}</h2>
                    <button onClick={() => this.setState({ name: 'Sunny Gupta(=>)' })} >Update(Arrow Function)</button>
                    <button onClick={() => this.updateState()} >Update(Normal Function)</button>
               </div>
          )
     }
}