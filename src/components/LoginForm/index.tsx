import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { TextField, InputAdornment, Input, IconButton } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { LoginContainer, LoginFormWrapper, StyledButton } from './styles'
import { Logo } from './styles'
import flugo_logo from '../../assets/flugo_logo.png'

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential
        console.log(userCredential)  // Adicione este console.log para depuração
        
        // Salvar no localStorage
        localStorage.setItem('user', JSON.stringify({ id: user.uid, email: user.email }))

        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <LoginContainer>
      <LoginFormWrapper
        onSubmit={(e) => login(e)}
      >
        <Logo src={flugo_logo} />
        <TextField
          id="email"
          label="Email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          placeholder="Digite sua senha"
          type={showPassword ? 'text' : 'password'}
          value={password}
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="mostrar/ocultar senha"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <StyledButton type="submit" variant="contained" color="primary">
          Entrar
        </StyledButton>
      </LoginFormWrapper>
    </LoginContainer>
  )
}

export default LoginForm