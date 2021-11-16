import React from 'react'
import { CourseItem } from '../../components'
import CoursesHeader from '../../UI/Header/CourseHeader'

const Dashboard = () => {
  return (
    <React.Fragment>
      <CoursesHeader />
      <CourseItem />
    </React.Fragment>
  )
}

export default Dashboard
