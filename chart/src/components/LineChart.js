import React from 'react';
import {Line} from 'react-chartjs-2';


function Linechart({chartData}) {
  return (
    <Line data={ chartData}/>
  )
}

export default Linechart;