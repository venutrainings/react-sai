import React from 'react';
import { Line } from 'react-chartjs-2';
import {chart as ChartJS} from 'chart.js/auto';

function chart(props) {
  return (
    <div>
  <Line
          data={{
            labels: props.chartLabels,
            datasets: [
              {
                data: props.chartData,
                label: "Activity",
                borderColor: "#3333ff",
                fill: true,
                backgroundColor: "#CAA6DB",
              },
            ],
          }}
        />
        </div>
  )
   
}

export default chart;