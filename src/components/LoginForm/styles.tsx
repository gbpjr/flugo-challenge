import styled from 'styled-components'

import { 
  Button, 
  Container,
} from '@mui/material'

export const Logo = styled.img`
  width: 150px;
`
export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;
  background: #ffffff;
  max-width: 350px;
  padding: 40px 32px;
  border-radius: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;

export const LoginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;