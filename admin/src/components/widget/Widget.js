import React from 'react';
import './widget.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


const Widget =({type})=>{
  let data;
  const amount = 100;
  const diff = 20;
   switch (type) {
    case "user":
      data = {
        title:'USERS',
        isMoney : true,
        link : 'See all users',
        icon :(
          <PersonOutlineOutlinedIcon className='icon' style={{
            color:"darkred",
            backgroundColor:'lightblue'
          }} />
        ),
      };
      break;
      case "order":
      data = {
        title:'ORDERS',
        isMoney : true,
        link : 'View all Orders',
        icon :(
          <ShoppingCartOutlinedIcon className='icon' style={{
            color:'darkblue',
            backgroundColor:'lightblue'
          }} />
        ),
      };
      break;
      case "earning":
      data = {
        title:'EARNING',
        isMoney : true,
        link : 'View net earnings',
        icon :(
          <MonetizationOnOutlinedIcon className='icon' style={{
            color:'crimson',
            backgroundColor:'lightblue'
          }} />
        ),
      };
      break;
      case "balance":
      data = {
        title:'BALANCE',
        isMoney : true,
        link : 'See details',
        icon :(
          <AccountBalanceWalletOutlinedIcon className='icon' style={{
            color:'darkslategray',
            backgroundColor:'lightblue'
          }} />
        ),
      };
      break;
      default:
        break;
   }
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"} {amount}</span>
        <span className='link'>{data.link}</span>
        </div>
        <div className='right'>
          <div className='percentage positive'>
            <KeyboardArrowUpOutlinedIcon />
          {diff}%
          </div>
          {data.icon}
        </div>
    </div>
  )

  }
    export default Widget;