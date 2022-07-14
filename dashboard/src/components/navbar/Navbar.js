import React from 'react';
import './navbar.scss';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import ListAltOutlined from '@mui/icons-material/ListAltOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type ='text' placeholder='search here .....' />
          <SearchOutlinedIcon className='icon' />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className='icon' />
            ENGLISH
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListAltOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img src='https://1.bp.blogspot.com/-1DelOnyFtMk/XzE-6nkGlRI/AAAAAAAAc0g/ZELpSPQqG2MZJ4MRspYa_LXlxf7PDHjCgCLcBGAsYHQ/s640/happy%2Bwhatsapp%2Bdp%2B%252810%2529.jpg' alt='' className='img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar