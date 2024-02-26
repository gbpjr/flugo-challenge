import React from 'react'
import { 
  Typography 
} from '@mui/material'

import CountAnimation from '../CountAnimation'
import { CardContainer } from './styles'

const Card: React.FC <{title: string, value: number, color: string}>= ({ title, value, color }) => {
  return (
    <CardContainer>
      <Typography
        variant='h6'
      >
        { title }
      </Typography>
      <Typography
        variant='h6'
        color={color}
        sx={{ display: 'flex', gap: '8px' }}
      >
        R$ <CountAnimation finalValue={value} />
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