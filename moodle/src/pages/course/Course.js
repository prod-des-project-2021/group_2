import { Breadcrumbs, Container, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { CourseTable } from '../../components'
import { CustomButton, Footer, Header } from '../../UI'
import styles from './styles.module.css'

const Course = () => {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Breadcrumbs>
          <Link to='dashboard' className={styles.link}>
            Dashboard
          </Link>
          <Link to='course' aria-current='page' className={styles.link}>
            Course
          </Link>
        </Breadcrumbs>
        <Box>
          <form className={styles.form}>
            <TextField className={styles.input}></TextField>
            <Box className={styles.wrapper_button}>
              <CustomButton
                fullWidth
                type='submit'
                className={styles.search_btn}
              >
                Go
              </CustomButton>
            </Box>
          </form>
        </Box>
        <CourseTable></CourseTable>
      </Container>
      <Footer />
    </>
  )
}

export default Course
