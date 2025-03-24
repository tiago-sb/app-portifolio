import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/home'

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path='/' exact />
      </Routes>
    </Router>
  )
}

export default Rotas