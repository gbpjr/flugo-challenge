import React from 'react'

import { Box } from '@mui/material'
import LoginForm from '../../components/LoginForm'

import styled from 'styled-components'

const PageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: #fafafa;
`

const Login: React.FC = () => {
  return (
    <PageWrapper>
      <LoginForm/>
    </PageWrapper>
  )
}

export default Login