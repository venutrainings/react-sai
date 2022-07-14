import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Widget from '../../components/widget/Widget';

function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />
      <div className='widgets'>
        <Widget />
        <Widget />
        <Widget />
        <Widget />
                
      </div>
      </div>
    </div>
  )
}

export default Home;