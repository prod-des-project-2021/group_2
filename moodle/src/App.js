import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
