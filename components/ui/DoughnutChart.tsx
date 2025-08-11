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
        const flatAccounts = accounts.flat();

        const accountNames = flatAccounts.map((a) => a.name);
        const balances = flatAccounts.map((a) => a.currentBalance);
    const data={
        datasets:[
            {
                labels:'Banks',
                data:balances,
                backgroundColor:[
                    '#0747b6'
                ],
            }
        ],
        labels:accountNames,
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