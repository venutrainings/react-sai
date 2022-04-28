import React,{useState,useEffect} from 'react';
import Table2 from './Table2';

function Table1() {
    const [allData,setAllData]=useState([]);
    const [searchInput,setSearchInput] = useState('')
   
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
    if(e.target.value.length >=3){
        setSearchInput(e.target.value)
     }
     else{
         setSearchInput('')
     }
     const filteredData= allData.filter(each=> each.title.toLowerCase().includes(searchInput.toLowerCase()))
     setAllData(filteredData)
    }

  return (
    <div className='container'>
        <div>
            <input type="text" placeholder='Please search here your post' onChange={onChangeHandler} />
        </div>
        {
            allData.length > 0 ? (<table>
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
    ):(<div>No data found</div>)
        }
        
    </div>
  )
}

export default Table1;
