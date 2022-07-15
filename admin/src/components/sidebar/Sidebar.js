import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SystemUpdateOutlinedIcon from '@mui/icons-material/SystemUpdateOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>Saikumar</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
            <p className='title'>MAIN</p>
            <li>
              <DashboardIcon  className='icon'/>
              <span>Dashboard</span>
            </li>
            <p className='title'>LISTS</p>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
            <li>
              <ProductionQuantityLimitsOutlinedIcon className='icon' />
              <span>Products</span>
              
            </li>
            <li>
              <ViewStreamOutlinedIcon className='icon' />
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingOutlinedIcon className='icon' />
              <span>Delivery</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
             <StackedLineChartOutlinedIcon className='icon' />
              <span>Status</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className='icon' />
              <span>Notificarions</span>
            </li>
            <p className='title'>SERVICE</p>
            <li>
              <SystemUpdateOutlinedIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <VpnKeyOutlinedIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsOutlinedIcon className='icon' />
              <span>Settings</span>
            </li>
            <p className='title'>USER</p>
            <li>
              <AccountCircleOutlinedIcon className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <LogoutOutlined className='icon' />
              <span>Logout</span>
            </li>
      </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
       

      </div>
    </div>
  )
}

export default Sidebar;