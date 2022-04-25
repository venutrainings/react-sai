import React from 'react';
import jsonData from './data.json';

function TableData() {
   const Displaydata=jsonData.map((item,index)=>{
       return <tr key={index}>
           <td>{item.id}</td>
           <td>{item.name}</td>
            <td>{item.language.known.english} and {item.language.known.hindi}</td>
            <td>{item.language.hobbies.movies},{item.language.hobbies.book}</td>
        
      
           
    
       </tr>
   })
   return (
    <div className='table-container'>
        {jsonData.length > 0 ? 
        (
        <table>
          <thead>
             <tr>
                 <th rowSpan={2}>ID</th>
                 <th rowSpan={2}>NAME</th>
                 <th colSpan={2}>LANGUAGE</th>
             </tr>
                <tr>
                    <th>KNOWN</th>
                    <th>HOBBIES</th>
                </tr>
          
          </thead>
          <tbody>
              {Displaydata}
          </tbody>
        </table>
        )
        :(<div>No data found</div>)}
    </div>
  )
    }
  


export default TableData;