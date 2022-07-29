import React from "react";
import './App.css';
import Save from "./components/Save";
import Example from "./components/example ";
import Items from "./components/example ";
import FetchApi from "./components/FetchApi";

import ReactFetch from "./components/ReactFetch";
import Sample from "./Sample";


function App() {
  return (
    <div>
      {/* <FetchApi /> */}
      <ReactFetch />
      {/* <Sample /> */}
      {/* <Example /> */}

      
    </div>
  )
}

export default App;


// import React,{useState,useEffect} from 'react';
// import './App.css';

// function App() {
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//          Authorization:'Barear 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36 '
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((item)=><p>{item.about}</p>)
//      }
//     </div>
//   );
// }

// export default App;