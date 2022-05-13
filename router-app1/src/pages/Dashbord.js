import React from 'react';
import image1 from '../images/2.jpg';

function Dashboard() {
  return (

    <div className='dashboard-container'>
        <h2 className='header'>Display your Dashboard content</h2>
        <div className='card-container'>
        <div class="container">
    <div className="row">
        <div className="col-md-4">
            <img src={image1} class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">REACT SOFTWARE</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class='card-text text-muted'><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
        </div>
        <div className="col-md-4">
            <img src={image1} alt='' className='card-img-top' />
            <h5 className='card-title'>
                ANGULAR 
            </h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text text-muted'><small>last updated in one week ago</small></p>
        </div>
        <div className="col-md-4 ">
        <img src={image1} alt='' className='card-img-top' />
            <h5 className='card-title'>
                PYTHON 
            </h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text text-muted'><small>last updated in 5 mins ago.</small></p>
        </div>
    </div>
    </div>

        </div>
        
    </div>
  )
}

export default Dashboard;