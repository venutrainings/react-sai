import React, { lazy, Suspense } from 'react';
import {useParams} from 'react-router-dom';
// import Table from '../../tableapidata/Table';
const Table=lazy(()=>import('../../tableapidata/Table'))
function UserDeatials() {
  const {userId}=useParams();
  return (
    <>
    <Suspense fallback={<>loading .....</>}>
      <Table />
    </Suspense>
    <div className='details'>
   <h4 className='header'> UserDeatials : <h5>{userId}</h5></h4>
    </div>
    <p className='para'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
    </>
  )
}

export default UserDeatials