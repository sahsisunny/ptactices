import React from 'react';

// export default class Profile extends React.Component {
//      testFun()
//      {
//           alert('test');
//      }

//      render() {
//           return (
//                <div>
//                     <h1>Profile</h1>
//                     <button onClick={() => this.testFun()}>Click Me</button>
//                     <button onClick={this.testFun.bind()}>Click Me</button>
//                     <button onClick={this.testFun.bind(this)}>Click Me</button>
//                     <button onClick={this.testFun}>Click Me</button>
//                </div>
//           );
//      }
// }

// // For Functional Component
// export default function Profile() {
//      function testFun() {
//           alert('test');
//      }
//      return (
//           <div>
//                <h1>Profile</h1>
//                <button onClick={testFun}>Click Me</button>       {/* Most Used*/}
//                <button onClick={() => testFun()}>Click Me</button>
//                <button onClick={testFun.bind()}>Click Me</button>
//                <button onClick={testFun.bind(this)}>Click Me</button>
//                <button onClick={() => testFun.bind(this)()}>Click Me</button>

//           </div>
//      );

// }

// For Own Practice
export default function Profile() {
     const [sumValue, setSumValue] = React.useState();
     const [num1, setNum1] = React.useState();
     const [num2, setNum2] = React.useState();

     function getValue1(e1, e2) {
          setNum1(e1.target.value);
          setNum2(e2.target.value);
     }

     function sum() {
          setSumValue(parseInt(num1) + parseInt(num2));
          console.log(num1, num2);
     }

     return (
          <div>
               <h2>Sum of Two Numbers</h2>
               <form>
                    Enter First Number: <input type="number" onChange={getValue1} /><br />
                    Enter Second Number: <input type="number" onChange={getValue1} /><br />
                    <button type="button" onClick={sum}>Sum</button>
                    Sum of Two Numbers:<input type="text" id="sumres" value={sumValue} />
               </form>
          </div>
     );

}