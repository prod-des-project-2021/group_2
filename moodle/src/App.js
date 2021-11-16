import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Login, Profile } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
