import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ScrollToTopButton } from './components'
import { Dashboard, Login, Profile, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
