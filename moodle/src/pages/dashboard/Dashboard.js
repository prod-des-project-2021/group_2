import React,{useContext} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { CourseItem } from '../../components'
import AuthContext from '../../context/auth-context'
import CoursesHeader from '../../UI/Header/CourseHeader'

const Dashboard = () => {
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)
  if (!authCtx.isLoggedIn) {
    navigate('/login')
  }
  return (
    <React.Fragment>
      <CoursesHeader />
      <CourseItem />
    </React.Fragment>
  )
}

export default Dashboard
