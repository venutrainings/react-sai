import React,{useState} from 'react';
import './example2.css';


function Example2() { 
    const [name,setName]=useState('SAI KUMAR');
    const [city,setCity] =useState('BHADRACHALAM');
    const [degree,setDegree]=useState('B.TECH');
    const [year,setYear]=useState('2016');
    const [course,setCourse]=useState('REACT.JS');
  return (
    <div>
        <h1>Hi, hello this is <span>{name}</span>!</h1>
        <h2>I am from <span>{city}</span>!</h2>
        <h3>i have done <span>{degree}</span> in the year of <span>{year}</span>.</h3>
        <h4>present looking for a job based on <span>{course}</span>.</h4>
        <input type="button" value="Add Name" onClick={()=>setName('sai kumar pusam')} />
        <input type="button" value="Add City" onClick={()=>setCity('vijayawada')} />
        <input type="button" value="Add Degreee" onClick={()=>setDegree('Bachalor of Technology')} />
        <input type="button" value="Add Course" onClick={()=>setCourse('React.js')} />
        <input type="button" value="Add Year" onClick={()=>setYear('2017')} />

    </div>
  )
}

export default Example2;