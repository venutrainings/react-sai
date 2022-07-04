import Datatype from 'faker/lib/datatype';
import React , {useState} from 'react';
import './App.css';
import Barchart from './components/chart/Barchart';
import Form from './components/chart/Form';
import PieChart from './components/chart/PieChart';
import Linechart from './components/LineChart';
import {userData} from './Data';

function App() {
  const [data,setData] = useState({
    labels:userData.map((user)=>user.year),
    datasets:[
     {
      label:'USER GAIN',
      data:userData.map((user)=>user.userGain),
      backgroundColor:[
        'rgb(205, 92, 92)',
        '#808000',
        '#C0C0C0',
        '#A52A2A',
        ' #800080'
      ],
      borderWidth:2,
      borderColor:'black'
     }

    ]
  })

  return (
    <div className='App'>
     <div style={{width:500}}>
     <Barchart chartData={data} />
     </div>
     <div style={{width:500}}>
     <Linechart chartData={data} />
     </div>
     <div style={{width:500, marginTop:20}}>
     <PieChart chartData={data} />
     </div>
    </div>
  )
}

export default App