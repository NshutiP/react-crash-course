                                                              // Pirple React crash course



                                                              // Introduction - Intergration



// import React from 'react';

// function App() {

//   // Styling

//   var style1 = {
//     color: "blue",
//     fontSize: 30,
//     backgroundColor: "Orange"
//   }

//   // creating variables

//   var var1 = "Hello world!";

//   var var2 = 5 + 7 ;

//   var var3 = 29;
  
//   var func1 = function func1() {
//     console.log("Some Kind of Function!");
//   }

//   var func2 = function func2() {
//     console.log("Some new kind of function!")
//   }

//   // Using JSX

//   return (

//    <div>

//       <h1 style={style1} title="This is the heading">Heading - JSX Method</h1>

//       <p id="para1">This is the paragraph</p>

//       <p className="para2">This is the second paragraph</p>

//       <p>{var1}{var2}</p> {/* or <p>{var1 + var2}</p> */}

//       <p>{6 * 8}</p>

//       <p>{var3 == 19 ? "True" : "False"}</p>

//       <div>

//         <label htmlFor="input1">Some data</label>

//         <input id="input1" name="input1"></input>

//       </div>

//       <div width="500">Hello world!</div>

//       <div>Text after width</div>

//       <button onClick={func1}>Click me!</button>

//       <button onMouseEnter={func2}>Click me too!</button>

//    </div>    
//  )
 
  
//   // Using HTML instead of JSX

//   // return React.createElement("h1", {title: "This is the Heading"},"Heading")

// }

// export default App;




                                                    // Components - State

                                                
import React from 'react';
import {Clscom} from './Clscom';
import {Detail} from './Detail';

function App(props) {

  return (

    <div>

      <p>Hello world</p>

      <p>Hello from the other side!</p>

      <p>Some Props are here: {props.contentdata}</p>

      <p>The children data of Functional Component; {props.children}</p>

      <h2>The nested class component starts from here: </h2>

      <Detail  ram="4GB" hdd="500GB" processor="core i3"/>

      <Detail ram="8GB" hdd="750GB" processor="core i5"/>

      <Detail hdd="1TB" ram="16GB" processor="core i7"/>

      <p><Clscom classdata="Some props data from the class component in the functional component" /></p>

    </div>

  ) 
  
}

export default App;


