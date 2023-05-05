// ~~~~~~~ For Function Components ~~~~~~~

// import React from 'react';
// function Profile(props) {
//      return (
//           <div>
//                <h1>Full Name : {props.text.name}</h1>
//                <h2>Age : {props.text.age}</h2>
//                <h3>Email : {props.text.email}</h3>
//           </div>
//      );
// }

// export default Profile;

// ~~~~~~~ For Class Components ~~~~~~~
import React from 'react';

export default class Profile extends React.Component {
     render() {
          return (
               <div>
                    <h1>Full Name : {this.props.text.name}</h1>
                    <h2>Age : {this.props.text.age}</h2>
                    <h2>Email : {this.props.text.email}</h2>
               </div>
          );
     }
}