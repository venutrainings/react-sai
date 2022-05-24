import React from 'react';
import  ReactDOM  from 'react-dom';

function ModelPortal() {
  return (
    ReactDOM.createPortal(
        <div className='portal-container'>
            <div className='portal-content'>
                <h1>Iam a Modal Portal</h1>
            </div>
        </div>,
        document.querySelector('#modal')
    )
  )
}

export default ModelPortal;