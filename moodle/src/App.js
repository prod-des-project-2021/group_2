import { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import { ScrollToTopButton } from './components'
import { Course, Dashboard, Login, Profile, Register } from './pages'
import AuthContext from './store/auth-context'

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          {authCtx.isLoggedIn && (
            <Route path='/'>
              <Dashboard />
            </Route>
          )}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/login'>
            <Login />
          </Route>
        )}
        <Route path='/course'>
          {!authCtx.isLoggedIn && <Course />}
          {authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/profile'>
          {authCtx.isLoggedIn && <Profile />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
