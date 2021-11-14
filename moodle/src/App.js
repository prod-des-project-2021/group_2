import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard, Profile } from './pages'
import { Footer } from './UI'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
