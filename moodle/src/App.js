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
import Error from './pages/error/Error'
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
        <Route path='/enroll'>
          <Enrollment />
        </Route>
        <Route path='/course/:courseId'>
          <DetailCourse />
        </Route>
        <Route path='/company-oriented-product-development-projects'>
          {authCtx.isLoggedIn && <CompanyOriented />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/mobile-project-(autumn-2021)'>
          {authCtx.isLoggedIn && <MobileProject />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/basics-of-mathematics-and-physics-din21sp'>
          {authCtx.isLoggedIn && <MathPhysics />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/course'>
          {authCtx.isLoggedIn && <Course />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/profile'>
          {authCtx.isLoggedIn && <Profile />}
          {!authCtx.isLoggedIn && <Redirect to='/login' />}
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
