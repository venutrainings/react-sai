import React, {lazy,Suspense} from 'react';
import './App.css';
import Navbar from './compoonents/Navbar';
import { BrowserRouter,Routes,Route, Link, Outlet} from 'react-router-dom';
 import Home from './compoonents/Home';
import About from './compoonents/About';
import Career from './compoonents/Career';
 import Contact from './compoonents/Contact';
import NotFound from './compoonents/NotFound';
import Footer from './compoonents/Footer';
import Card from './compoonents/Card';
import ModelWindow from './compoonents/ModelWindow';
import OpenModel from './compoonents/popups/OpenModel';
import Products from './compoonents/nestedcomponents/Products';
import Users from './compoonents/nestedcomponents/Users';
import Lists from './compoonents/nestedcomponents/Lists';
import UsersList from './compoonents/nestedcomponents/nested2/Users';
import UserDeatials from './compoonents/nestedcomponents/nested2/UserDeatials';
import Admin from './compoonents/nestedcomponents/nested2/Admin';
import Hero from './compoonents/errorboundry/Hero';
import ErrorBoundry from './compoonents/errorboundry/ErrorBoundry';
import Error from './compoonents/errorboundry/Error';

//lazy loading 
//  const Home=lazy(()=>import('./compoonents/Home'));
// const About=lazy(()=>import('./compoonents/About'));
// const Contact=lazy(()=>import('./compoonents/Contact'));
// const Career=lazy(()=>import('./compoonents/Career'));



function App() {

  const data=[
    {id:1,name:'sai',age:'26'},
    {id:2,name:'vijay',age:'24'},
    {id:3,name:'vinay',age:'22'},

  
  ]
  return (
  <BrowserRouter >
    <div className="App">
     <Navbar /> 

  



     </div>
      <Routes> 
          {/* <Route path='/' element={
            <Suspense fallback={<h2>loading...</h2>}>
          <Home/>

            </Suspense>
          } />
          <Route path='about' element={
              <Suspense fallback={<h2>loading...</h2>}>
            <About />
    
                </Suspense>
          } 
          />
          <Route path='contact' element={
            <Suspense fallback={<h2>loading...</h2>}>
       <Contact/>
              </Suspense>
          
          } /> 
          <Route path='career' element={
         <Suspense fallback={<h2>loading ...</h2>}>
           <Career />   
         </Suspense>
          } /> */}

          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact/>} />
          <Route path='career' element={<Career />} />
          
          <Route path='/:userId' element={<Card />} /> 
          <Route path='model' element={<ModelWindow />} />
          <Route path='OpenModel' element={<OpenModel />} />
          <Route  path='products' element={<Products />}>
              <Route path='users'  element={<Users />} />
              <Route path='lists'  element={<Lists />} />
          </Route>
          <Route path='/userslist' element={<UsersList  users={data}/>}>
             <Route path=':userId' element={<UserDeatials />}/> 
             <Route path='admin' element={ <Admin />}/>

          </Route>
          <Route path='error' element={<Error />} />
        


          <Route path='*' element={<NotFound />} />

      </Routes>
        <hr></hr>
      <div style={{textAlign:'center'}}><Footer /></div>

    
  </BrowserRouter>
  );
}

export default App;
