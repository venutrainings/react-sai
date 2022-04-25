import React,{useState,useEffect} from 'react';


function GetTable() {
  const [alldata, setAlldata]=useState([]);
const [filteredData,setFilteredData]=useState(alldata);
const URL='https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
       fetchData();
  //  fnGetData();
        }, [])
  const fetchData=()=>{
        fetch(URL)
        .then((res)=>
            res.json()
        )
        .then((response)=>{
            console.log(response);
            setAlldata(response);
            setFilteredData(response);
        })
    }
  /*  const setHandler=(e)=>{
      let value=e.target.value;
      let result=[];
      console.log(value);
      if(e.target.value.length >=3){
        result=alldata.filter((val,index)=>{
          return val.title.includes(value);
        })
        setFilteredData(result)
      } else{
       value=''
        result=alldata.filter((data)=>{
          return data.title.search(value) !== -1;
        })
        setFilteredData(result)
      } 
      
    }  */
    const setHandler=(e)=>{
     let value=e.target.value;
     let result=[];
      console.log(value);
     if(e.target.value.length >=3){
      result=alldata.filter((val,index)=>{
        return val.title.includes(value);
      })
     setFilteredData(result);
     } else{
      let value="";
       result=alldata.filter((val,index)=>{
        return val.title.includes(value);
      })
     setFilteredData(result);
     }
    }
  return (
    <div>
      <div style={{margin:"0 auto",marginTop:"10%"}}>
        <label>search:</label>
        <input type="text"  onChange={(e)=>setHandler(e)}/>
      </div>
     <div>
     {filteredData.length > 0 ? 
        (
        <table>
            <thead>
                
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </thead>
            <tbody>
                {
                    filteredData.map((item,index)=>
                         <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>


                        </tr>
                    )
                }
            </tbody>
        </table>
        )
        :(<div>No Data Found</div>)}
     </div>
    </div>
  )
}

export default GetTable;


