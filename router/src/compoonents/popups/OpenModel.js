import React, {useState}  from 'react';
import CloseModel from './CloseModel';

function OpenModel() {
    const [openmodel,setOpenmodel]=useState(false);
  return (
    <div className='open-container'>
        <h4>Hey!, if you want  to open Model window . you have to click on the below open button...</h4>
        <button className='open-btn' onClick={()=>
            setOpenmodel(true)
        }>Open</button>
        <div>
            { openmodel && <CloseModel  setOpenmodel={setOpenmodel}/> }
        </div>
    </div>
  )
}

export default OpenModel;