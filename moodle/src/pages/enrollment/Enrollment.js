import { Breadcrumbs, Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from './styles.module.css'

const Enrollment = () => {
  return (
    <>
      <Header />

      <Container className={styles.container}>
        <Box>
          <Typography className={styles.course_name}>
            Company-Oriented Product Development Projects
          </Typography>
        </Box>
        <Breadcrumbs className={styles.breadcrums_wrapper}>
          <Link to='dashboard' className={styles.link}>
            Dashboard
          </Link>
          <Link to={'/course'} className={styles.link}>
            Course
          </Link>
          <Link to='course/:slug' aria-current='page' className={styles.link}>
            Company-Oriented Product Development Projects
          </Link>
        </Breadcrumbs>
        <Box>
          <Typography className={styles.enrolment_options}>
            Enrollment options
          </Typography>
        </Box>
        <Box>
          <Box className={styles.course_info}>
            <Typography className={styles.course_title}>
              Course Name:
            </Typography>
            <Typography className={styles.course_content}>
              Company-Oriented Product Development Projects
            </Typography>
          </Box>
          <Box className={styles.course_info}>
            <Typography className={styles.course_title}>Course Code:</Typography>
            <Typography>T771010D</Typography>
          </Box>
          <Box className={styles.course_info}>
            <Typography className={styles.course_title}>Teacher: </Typography>
            <Box>
              <Typography>Lasse Haverinen</Typography>
              <Typography>Janne Kumpuoja</Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.btn_wrapper}>
          <Link to='course/:slug'>
            <Button variant='contained' className={styles.btn}>
              Enroll
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default Enrollment
