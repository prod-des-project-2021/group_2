import { Breadcrumbs, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from '../company-oriented-product-development-projects/styles.module.css'

const MathPhysics = () => {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Box>
          <Typography className={styles.course_name}>
            Basics of Mathematics and Physics
          </Typography>
        </Box>
        <Breadcrumbs className={styles.breadcrums_wrapper}>
          <Link to={'/dashboard'} className={styles.link}>
            Dashboard
          </Link>
          <Link to={'/course'} className={styles.link}>
            <Typography> Course</Typography>
          </Link>
          <Link
            to='course/math-physics'
            aria-current='page'
            className={styles.link}
          >
            Basics of Mathematics and Physics
          </Link>
        </Breadcrumbs>
        <Box className={styles.course_part}>
          <Typography className={styles.title}>Introduction </Typography>
          <Box className={styles.content_wrapper}>
            <Typography>
              Jaakko Kaski is responsible for giving the grades into our
              evaluation management software ”Peppi”. If you have any questions
              about it, send email to jaakko.kaski@oamk.fi
            </Typography>
          </Box>
        </Box>
        <Box className={styles.course_part}>
          <Typography className={styles.title}>Mathematics</Typography>
          <Box className={styles.content_wrapper}>
            <Typography>Teacher: Jarkko Hurme</Typography>
          </Box>
        </Box>
        <Box>
          <Typography className={styles.title}>Physics</Typography>
          <Box className={styles.content_wrapper}>
            <Typography>Teacher: Jaakko Kaski</Typography>
            <Typography>Email: jaakko.kaski@oamk.fi</Typography>
            <Typography>
              Remote Lectures in Zoom:{' '}
              <Link to=' https://oamk.zoom.us/j/63535775133?pwd=eVh5SXlCUlNEMVV1SVJtdTRGblFuQT09'>
                Here is the link!
              </Link>
            </Typography>
            <Typography>
              If the link asks the password it is this: 210421
            </Typography>
            <Typography>
              Matherial and exercise return boxes you find in other Moodle pages
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default MathPhysics
