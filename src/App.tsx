import React from 'react'

import {
  Routes,
  Route
} from "react-router-dom"

import Home from './pages/Home'

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path='login' element={<Login />} /> */}
        {/* Componente para quando não encontrar uma rota */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>   
    </>
  )
}

export default App