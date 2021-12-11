import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Footer, Header } from '../../UI'
import styles from './styles.module.css'

const Error = () => {
  return (
    <>
      <Header />
      <Box className={styles.error}>
        <Typography>404 not found</Typography>
      </Box>
      <Footer />
    </>
  )
}

export default Error
