import axios from 'axios';
import React,{useState,createContext,useEffect} from 'react';
import Component2 from './Component2';


export const fetchContext = createContext();
const Component1 = () => {
    const [allData,setAllData]=useState([]);
    const [searchInput,setSearchInput]=useState('');
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{
                const result=res.data;
                setAllData(result);
              console.log(res);
            })
    },[]);
      const onChangeHandler=(e)=>{
        if(searchInput >=3){
          setSearchInput(e.target.value);
        } else{
          setSearchInput("");
        }
        const result=allData.filter(each=>(
          each.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
        ))
        setAllData(result);
      }
  return (
    <div id='contaienr'>
        <fetchContext.Provider value={allData}>
          <h1>Display the fetching Table Data in Below table </h1>
          <input type="text" onChange={e=>onChangeHandler(e)} />
            <Component2 />
        </fetchContext.Provider>

    </div>
  )
}

export default Component1;