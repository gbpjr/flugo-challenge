import React, { useEffect } from 'react'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)
import 'chart.js/auto'

import { Line } from 'react-chartjs-2'

import { ChartContainer } from './styles'


const Chart: React.FC <{
  label: string
  time: string[]
  data: number[]
}> = ({ label, time, data }) => {

  useEffect(() => {
    console.log(data)
  }, [])

  const _data = {
    labels: time.map((t) => t.split('T').pop()),
    datasets:
    [
      {
        id: 1,
        label: label,
        data: data,
        backgroundColor: 'rgba(60, 179, 113, 0.2)',
        borderColor: 'rgb(60, 179, 132)',
        pointBackgroundColor: 'rgb(60, 179, 132)',
        pointHoverBorderColor: 'rgb(60, 179, 132)'
      },
    ]
  }

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        responsive: true
      },
    
    },
  }
 
  return (
    <ChartContainer>
      <Line 
        data={_data}
        options={options}
        width={'100%'}
        height={'100%'}
      />
    </ChartContainer>
  )
}

export default Chart