import React from 'react'

import { Alert as MuiAlert, AlertTitle } from '@mui/material'

const Alert: React.FC = () => {
  return (
    <MuiAlert severity="error">
      <AlertTitle>Erro</AlertTitle>
      Não foi possível concluir a solicitação.
    </MuiAlert>
  )
}

export default Alert