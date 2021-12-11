import DescriptionIcon from '@mui/icons-material/Description'
import HelpIcon from '@mui/icons-material/Help'
import SchoolIcon from '@mui/icons-material/School'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseOverview, Timeline } from '../../components'
import { ASSIGNMENT, COURSE } from '../../constants/images'
import { CustomModal, Footer, Header } from '../../UI'
import styles from './styles.module.css'
import axios from 'axios'

const Dashboard = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const userId = localStorage.getItem('userId')
  const idToken = localStorage.getItem('token')
  const URL = `${process.env.REACT_APP_URL}users/${userId}`

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const userInfo = await axios(URL, {
          headers: {
            Authorization: 'Bearer ' + idToken,
          },
        })

        setData(userInfo.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [URL])

  const name = data?.result?.name || 'Loading'
  const courses = data?.result?.courses || 'Loading'

  return (
    <React.Fragment>
      <Header name={name} />
      <Container>
        <Box
          className={styles.background}
          style={{ backgroundImage: `url(${COURSE})` }}
        />
      </Container>

      <Grid container spacing={2} className={styles.info_container}>
        <Grid item xs={9}>
          <Container>
            <Timeline />
            <CourseOverview courses={courses} />
          </Container>
        </Grid>
        <Grid item xs={3}>
          <Box className={styles.info_nav}>
            <Link to="course" className={styles.link}>
              <DescriptionIcon />
              <Typography>Courses</Typography>
            </Link>
            <Link to="" className={styles.link}>
              <HelpIcon />
              <Typography>Instructions and Support</Typography>
            </Link>
            <Link to="" className={styles.link}>
              <SchoolIcon />
              <Typography>Create new course</Typography>
            </Link>
          </Box>
          <Box className={styles.info_nav}>
            <Typography className={styles.title_nav}>
              Latest announcements
            </Typography>
            <Typography className={styles.date_nav}>22 Nov, 10.03</Typography>
            <Link to="" className={styles.news_nav}>
              <Typography>
                Moodle course templates available for teachers
              </Typography>
            </Link>
          </Box>
          <Box className={styles.info_nav}>
            <Typography className={styles.title_nav}>
              Upcoming events
            </Typography>
            <ul className={styles.list_nav}>
              <li>
                <div>
                  <div>
                    <img src={ASSIGNMENT} alt="icon" />
                  </div>
                  <div>
                    <Link to="" className={styles.link}>
                      <CustomModal title="HOMEWORK PROBLEMS 4. Submission of the solutions to Homework"></CustomModal>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
      <Footer name={name} />
    </React.Fragment>
  )
}

export default Dashboard
