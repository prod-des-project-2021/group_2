import { useContext } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import { ScrollToTopButton } from './components'
import {
  CompanyOriented,
  Course,
  Dashboard,
  Enrollment,
  Login,
  MathPhysics,
  MobileProject,
  Profile,
  Register,
} from './pages'
import DetailCourse from './pages/detail-course/DetailCourse'
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
        <Route path="/enroll">
          <Enrollment />
        </Route>
        <Route path="/course/:courseId">
          <DetailCourse />
        </Route>
        <Route path="/course/company-oriented-product">
          {!authCtx.isLoggedIn && <CompanyOriented />}
          {authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/course/mobile-project">
          {!authCtx.isLoggedIn && <MobileProject />}
          {authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/course/math-physics">
          {!authCtx.isLoggedIn && <MathPhysics />}
          {authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/course">
          {authCtx.isLoggedIn && <Course />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
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
