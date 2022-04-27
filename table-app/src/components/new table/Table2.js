import React from 'react';


function Table2(props) {
    const {data,deleteEachRowData}=props;
    const {id,title,body}=data;
const deleteData=()=>{
  deleteEachRowData(id)
}
  return (
    <>
   
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
                <button onClick={deleteData}>Delete</button>
            </tr>
     
            
    
    </>
  )
}

export default Table2;