import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from "react-router-dom"
import { MainTheme } from './themes/index.tsx'
import { ThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={MainTheme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)