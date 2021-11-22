import { useContext } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import { ScrollToTopButton } from './components'
import { Dashboard, Login, Profile, Register } from './pages'
import AuthContext from './store/auth-context'

function App() {
  const authCtx = useContext(AuthContext)
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && (
            <Route path="/">
              <Dashboard />
            </Route>
          )}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <Profile />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
