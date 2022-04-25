import React,{useState,useEffect} from 'react'

function TableDataFn() {
    const [data,getData]=useState([]);
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
            getData(response);
        })
    }
    // using xhr reques

   const fnGetData=()=>{
    let httpObj=new XMLHttpRequest();
    httpObj.open('get',URL);
    httpObj.send();
    httpObj.onload=function(){
        let res=httpObj.responseText;
        let result=JSON.parse(res);
        //let results=JSON.stringify(result);
        console.log(result);
        getData(result)
    }
   }
  return (
    <div className='app'>
         <h2 className="header2">How to display the post details here</h2>
        {data.length > 0 ? 
        (
        <table>
            <thead>
                
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </thead>
            <tbody>
                {
                    data.map((item,index)=>
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
        :(<div>No Data Found</div>)}</div>
  )
}

export default TableDataFn;