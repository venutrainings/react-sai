import React,{useState,useEffect} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement,LinearScale,CategoryScale, Title,Tooltip,Legend} from 'chart.js';
import axios from "axios";

ChartJS.register(
    
        BarElement,
        LinearScale,
        CategoryScale,
         Title,
         Tooltip,
         Legend
)
// used api urls:
// 1. comments:  'https://jsonplaceholder.typicode.com/comments'
//2. users: 'https://jsonplaceholder.typicode.com/users'
//3. coins: 'https://api.coinranking.com/v2/coins'



function Barchart() {
    const [data,setData] = useState({
        labels:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        datasets:[{
            label:'Dataset 1',
            data:[1,2,3,4,5,3,5],
            borderColor:     'rgb(75, 192, 192)',
            backgroundColor:  'rgba(75, 192, 192, 0.2)',
            borderWidth:1
        },
        {
            label:'Dataset 2',
            data:[5,4,3,2,1,6,4],
            borderColor:    'rgb(255, 99, 132)',
            backgroundColor:'rgba(255, 99, 132, 0.2)',
            borderWidth:1
        }
    ]
    })
    const options ={
        indexAxis:'x',
        elements:{
            bar:{
                borderWidth:2
            },
        },
        responsive:true,
        plugins:{
            legend:{
                position:'left'
            },
            
         title:{
            display:true,
            text:'CHART JS VERTICAL BAR'
         }
         },
    }
    // const data = {
    //     labels:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    //     datasets:[{
    //         label:'Dataset 1',
    //         data:[1,2,3,4,5,3,5],
    //         borderColor:     'rgb(75, 192, 192)',
    //         backgroundColor:  'rgba(75, 192, 192, 0.2)',
    //         borderWidth:1
    //     },
    //     {
    //         label:'Dataset 2',
    //         data:[5,4,3,2,1,6,4],
    //         borderColor:    'rgb(255, 99, 132)',
    //         backgroundColor:'rgba(255, 99, 132, 0.2)',
    //         borderWidth:1
    //     }
    // ]
    // }
useEffect(()=>{
  
    // const fetchData = async () =>{
    //     const dataset1=[];
    //     const dataset2=[];
    //     const labelset=[];
    //       return await fetch('https://jsonplaceholder.typicode.com/comments',{method:'GET'})
    //       .then((response)=>{
    //         console.log(response);
    //         const result = response.json();
    //         return result;
    //       })
    //       .then((res)=>{
    //            console.log('res data ',res)
    //            for(const val of res){
    //                 dataset1.push(val.id);
    //                 dataset2.push(val.postId);
    //                 labelset.push(val.name);
    //            }
    //            setData({
    //             labels:labelset,
    //             datasets:[{
    //                 label:'Dataset ID',
    //                 data:dataset1,
    //                 borderColor:     'rgb(75, 192, 192)',
    //                 backgroundColor:  'rgba(75, 192, 192, 0.2)',
    //                 borderWidth:1
    //             },
    //             {
    //                 label:'Dataset ID2',
    //                 data:dataset2,
    //                 borderColor:    'rgb(255, 99, 132)',
    //                 backgroundColor:'rgba(255, 99, 132, 0.2)',
    //                 borderWidth:1
    //             }
    //         ]
    //         })
    //            console.log('array data',dataset1,dataset2);
    //         })
    //         .catch((err)=>{
    //             console.log('error data',err);
    //         })
    // };



    const fetchData = ()=>{
        const dataset1=[];
        const dataset2=[];
        const labelset=[];
        axios.get('https://api.coinranking.com/v2/coins').then((res)=>{
            console.log(res);
            const result = res.data;
           
            for( const val of result){
                dataset1.push(val.rank);
                // dataset2.push(val.postId);
                labelset.push(val.name);
            }
            setData({
                labels:labelset,
                datasets:[{
                    label:'comment ID',
                    data:dataset1,
                    borderColor:     'rgb(75, 192, 192)',
                    backgroundColor:  'rgba(75, 192, 192, 0.2)',
                    borderWidth:1
                },
                {
                    label:'comment ID2',
                    data:dataset2,
                    borderColor:    'rgb(255, 99, 132)',
                    backgroundColor:'rgba(255, 99, 132, 0.2)',
                    borderWidth:1
                }
            ]
            })
            console.log('array data: ', dataset1,dataset2,labelset)
                   })
    }
    fetchData();
},[])

  return (
    <div style={{width:'80%',height:'50%',marginTop:30}}>
        <Bar data={data} options={options}/>
    </div>
  )
}

export default Barchart;
























// import React, {useState,useEffect} from 'react';
// import {BarElement, CategoryScale,  Chart, LinearScale} from 'chart.js';
// import {Bar} from 'react-chartjs-2';
// Chart.register(
//     BarElement,
//     LinearScale,
//     CategoryScale,
// )
// function Barchart() {
//     const [chart,setChart] = useState([]);
//     const apiURL = 'https://api.coinranking.com/v2/coins/?limit=10';
//     const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//     const apiKey = 'coinrankingdf324f21964173b0d3c860c9bad76a03f62e9cd3523fe0f5';

//     useEffect(()=>{
//         const fetchCoins = async () => {
//             await fetch(`${proxyUrl}${apiURL}`, {
//               method: 'GET',
//               headers: {
//                 'Content-Type': 'application/json',
//                 'x-access-token': `${apiKey}`,
//                 'Access-Control-Allow-Origin': "*"
//               }
//             })
//               .then((response) => {
//                 if (response.ok) {
//                   response.json().then((json) => {
//                     console.log(json.data);
//                     // setChart(json.data)
//                   });
//                 }
//               }).catch((error) => {
//                 console.log(error);
//               });
//           };
        
   
//     fetchCoins();
    
    
// },[proxyUrl,apiURL,apiKey])






//     const data = {
//         labels:['Red','Blue','Green','Purple','Orange'],
//         datasets:[{
//             label:'My First Dataset',
//             data:[13,19,5,3,7],
//             borderWidth:1,
//             borderColor:['black','green','purple','red','white'],
//             backgroundColor:['red','blue','green','purple','orange']
//         }]
//     }
//   const options={
// scales:{
 
//     y:{
//         beginsAtZero:true
//     },
//     legend:{
//         fontSize:25
//     }
// }
//   }
//   return (
// <div style={{width:'50%',height:'50%',marginTop:20}}>
// <Bar data={data} options={options} />
// </div>
//   )
// }

// export default Barchart;

// api coin coinrankingdf324f21964173b0d3c860c9bad76a03f62e9cd3523fe0f5

// https://cors-anywhere.herokuapp.com/

// https://api.coinranking.com/v2/coins 