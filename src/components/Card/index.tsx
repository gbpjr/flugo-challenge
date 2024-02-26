import React from 'react'
import { 
  Box, 
  Typography 
} from '@mui/material'

// import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import CountAnimation from '../CountAnimation'

import styled from 'styled-components'

const CardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: #ffffff;
  border-radius: 16px;
  min-width: 30%;
  height: 150px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 24px;

`

const Card: React.FC = () => {
  return (
    <CardContainer>
      <Typography
        variant='h6'
      >
        Receita
      </Typography>
      <Typography
        variant='h6'
        color={'rgb(60, 179, 132)'}
        sx={{ display: 'flex', gap: '8px' }}
      >
        R$ <CountAnimation finalValue={50000} />
     </Typography>
     <Typography
        variant='overline'
        // color={'rgb(60, 179, 132)'}
      >
        +22% em relação ao último mês
      </Typography>
    </CardContainer>
  )
}

export default Card