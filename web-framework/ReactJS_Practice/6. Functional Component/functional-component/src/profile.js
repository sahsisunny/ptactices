import React from 'react';

function Profile(props) {
     const red = () => {
          alert(props.text);
     }
     return (
          <div>
               <h1>Profile</h1>
               <p>Profile page body content</p>
               <button onClick={red} >Click Me</button>
          </div>
     )
}

export default Profile;

// props is an object that contains all the attributes of the component
// props.text is the value of the text attribute of the component in App.js