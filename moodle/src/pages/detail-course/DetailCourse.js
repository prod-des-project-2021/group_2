import { Breadcrumbs, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from './styles.module.css'

const DetailCourse = () => {
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
          <Link to={'/dashboard'} className={styles.link}>
            Dashboard
          </Link>
          <Link to={'/course'} className={styles.link}>
            <Typography> Course</Typography>
          </Link>
          <Link to='course/:slug' aria-current='page' className={styles.link}>
            Company-Oriented Product Development Projects
          </Link>
        </Breadcrumbs>
        <Box className={styles.course_content}>
          <Box className={styles.course_part}>
            <Typography className={styles.title}>Intro</Typography>
            <Box className={styles.content_wrapper}>
              <Typography>This is the intro of the course</Typography>
            </Box>
          </Box>
          <Box className={styles.course_part}>
            <Typography className={styles.title}>Documentation</Typography>
            <Box className={styles.content_wrapper}>
              <Typography>This is the documentations </Typography>
            </Box>
          </Box>
          <Box>
            <Typography className={styles.title}>
              Frequently Asked Questions
            </Typography>
            <Box className={styles.content_wrapper}>
              <Typography>This is the FAQ </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default DetailCourse