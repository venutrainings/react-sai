import React from 'react'

function CloseModel({setOpenmodel}) {
  return (
    <div className='close-model-container'>
        <div className='close-model-content'>
            <button className='btn_close' onClick={()=>setOpenmodel(false)}>X</button>
        <div className='title'>
                <h1>Are You sure! to continue to next page..</h1>
            </div>
        <div className='body'>
                <p>The next page will be awesome! please you should visit and enjoy the  next page....</p>
            </div>
        <div className='footer'>
                <button className='open-btn' onClick={()=>setOpenmodel(false)}>Cancel</button>
                <button className='close-btn' onClick={()=>setOpenmodel(true)}>Continue</button>
        </div>
        </div>
    </div>
  )
}

export default CloseModel