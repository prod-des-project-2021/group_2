import { LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from './styles.module.css'

const LinearProgressWithLabel = (props) => {
  return (
    <Box className={styles.progress_wrapper}>
      <Box className={styles.progress}>
        <LinearProgress variant='determinate' {...props} />
      </Box>
      <Box className={styles.progress_number}>
        <Typography>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

const Progress = ({ progress }) => {
  return (
    <Box className={styles.progress_container}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}

export default Progress
