import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { ScrollToTopButton } from './components'
import AuthContext from './context/auth-context'
import { Dashboard, Login, Profile, Register } from './pages'

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} exact />

        {!authCtx.isLoggedIn && (
          <Route element={<Navigate path="login" />} />
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
