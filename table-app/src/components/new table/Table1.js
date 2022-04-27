import React,{useState,useEffect} from 'react';
import Table2 from './Table2';

function Table1() {
    const [allData,setAllData]=useState([]);
    const [filterData,setFilterData]=('');
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>(
             res.json()
        ))
        .then(response=>{
            setAllData(response);
            console.log(response)

        })
    }
  const deleteEachRowData=(id)=>{
      let finalData=allData.filter(each=>each.id!==id)
      setAllData(finalData);
  }
  
  const onChangeHandler=(e)=>{
    let value=e.target.value;
    let result=[];
     console.log(value);
    if(e.target.value.length >=3){
     result=allData.filter((val,index)=>{
       return val.title.toLowerCase().includes(value.toLowerCase());
     }) 
  
    setAllData(result)
    } else{
     let value="";
      result=allData.filter((val,index)=>{
        return val.title.toLowerCase().includes(value.toLowerCase())

     })

   setAllData(result)
    }
  }


  

  return (
    <div className='container'>
        <div>
            <input type="text" placeholder='Please search here your post' onChange={(e)=>onChangeHandler(e)} />
        </div>
        <table>
            <thead>
                <tr>
                <th>id</th>
                <th>title</th>
                <th>body</th>
                <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    allData.map(each=>(
                        <Table2 data={each} deleteEachRowData={deleteEachRowData} key={each.id}/>
                    ))
                }
            </tbody>
        </table>

        
    </div>
  )
}

export default Table1;
