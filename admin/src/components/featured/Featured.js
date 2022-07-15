import React from 'react';
import './feature.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Featured() {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small' />
        </div>
        <div className='bottom'>
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}    />
        </div>
    </div>
  )
}

export default Featured;