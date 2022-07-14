import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Widget() {
  return (
    <div className='widget'>
      <div className='left'>
        <div className='title'>USERS</div>
        <div className='counter'>24417</div>
        <div className='link'>See all users</div>
      </div>
      <div className='right'>
        <div className='percentage'>
          <KeyboardArrowUpOutlinedIcon />
          20%
        </div>
       <PersonOutlineOutlinedIcon className='icon' /> 
      </div>
    </div>
  )
}

export default Widget;