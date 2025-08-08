'use client';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  // other elements/plugins you need
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({accounts}:DoughnutChartProps) {
    const data={
        datasets:[
            {
                labels:'Banks',
                data:[1234,4345,565],
                backgroundColor:[
                    '#0747b6', '#2265d8', '#2f91fa'
                ],
            }
        ],
        labels:['Bank A', 'Bank B', 'Bank C']
    }
  return (
    <Doughnut 
        data={data} 
        options={{
            cutout:'60%',
            plugins: {
                legend: {
                   display:false
                },
            },
        }}
    />
  )
}

export default DoughnutChart