import React, { useEffect } from 'react'

import {
  Chart as ChartJS,
  ChartType,
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

import { Typography } from '@mui/material'

import { Chart } from 'react-chartjs-2'

import { ChartContainer } from './styles'

import finances from './data.json'

const BarChart: React.FC <{
  title: string,
  keys: string[]
}> = ({ title, keys }) => {

  useEffect(() => {
  }, [])

  const labels = [
    'Jan', 
    'Fev', 
    'Mar', 
    'Abr', 
    'Mai', 
    'Jun', 
    'Jul', 
    'Ago', 
    'Set', 
    'Out', 
    'Nov', 
    'Dez'
  ]

  const _data = {
    labels: labels,
    datasets:
    [
      {
        type: 'line' as ChartType,
        id: 0,
        label: keys[0].replace('_', ' '),
        data: finances.dados_financeiros.map((mes) => mes['lucro_liquido']),
        borderWidth: 2,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointHoverBorderColor: 'rgb(54, 162, 235)' 
      },
      {
        type: 'bar' as ChartType,
        id: 1,
        label: keys[1],
        data: finances.dados_financeiros.map((mes) => mes['receita']),
        borderWidth: 1,
        backgroundColor: 'rgba(60, 179, 113, 0.2)',
        borderColor: 'rgb(60, 179, 132)',
        pointBackgroundColor: 'rgb(60, 179, 132)',
        pointHoverBorderColor: 'rgb(60, 179, 132)'
      },
      {
        type: 'bar' as ChartType,
        id: 2,
        label: keys[2],
        data: finances.dados_financeiros.map((mes) => mes['despesa']),
        borderWidth: 1,
        backgroundColor: 'rgb(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
      },
    ]
  }

  const options = {
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `R$ ${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `R$ ${context.parsed.y.toLocaleString('en-US', { maximumFractionDigits: 2 })}`,
        },
      },
    },
  }
 
  return (
    <ChartContainer>
      <Typography
        variant='h6'
      >
        { title }
      </Typography>
      <Chart
        type='bar'
        data={_data}
        options={options}
        width={'100%'}
        height={'100%'}
      />
    </ChartContainer>
  )
}

export default BarChart