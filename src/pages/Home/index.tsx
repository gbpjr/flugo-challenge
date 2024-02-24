import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { updateData } from '../../redux/dataSlice'
import fetchData from '../../api'

import { Typography } from '@mui/material'
import Frame from '../../components/Frame'
import Chart from '../../components/Chart'
import {
  Container,
  ChartsContainer
} from './styles.tsx'

const Home: React.FC = () => {

  const dispatch = useAppDispatch()
  const data = useAppSelector((data) => data.data)

  useEffect(() => {
    fetchData('latitude=-22.981&longitude=-43.2029&hourly=temperature_2m&forecast_days=1&hourly=wind_speed_10m&hourly=wind_direction_10m').then((res) => {
      dispatch(updateData({
        time: res.hourly.time,
        temperature_2m: res.hourly.temperature_2m,
        wind_speed_10m: res.hourly.wind_speed_10m
      }))
    })
  }, [])

  return (
    <Container>
      <Frame>
        <Typography
          variant='h1'
          component='h1'
        >
          Praia de Ipanema
        </Typography>
        <Typography
          variant='body1'
        >
          Informações gerais sobre as condições climáticas nas últimas 24 horas.
        </Typography>
        <ChartsContainer>
          <Chart
            label='Temperatura em ºC'
            time={data.time}
            data={data.temperature_2m}
          />
          <Chart
            label='Velocidade do vento'
            time={data.time}
            data={data.wind_speed_10m}
          />
                
        </ChartsContainer>
      </Frame>
    </Container>
  )
}

export default Home