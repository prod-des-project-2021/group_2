import { Breadcrumbs, Container, TextField } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CourseTable } from '../../components'
import { CustomButton, Footer, Header } from '../../UI'
import styles from './styles.module.css'

const style = {
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#f7931e !important',
  },
}

const Course = ({ classes }) => {
  const [searchTerm, setSearchTerm] = useState('')
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
            <TextField
              type='text'
              placeholder='Search...'
              onChange={(event) => setSearchTerm(event.target.value)}
              className={styles.input}
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline,
                },
              }}
            ></TextField>
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
        <CourseTable searchTerm={searchTerm}></CourseTable>
      </Container>
      <Footer />
    </>
  )
}

export default withStyles(style)(Course)
