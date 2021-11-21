import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { ASSIGNMENT } from '../../constants/images'
import styles from './styles.module.css'

const CourseDate = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='flex-start'
    >
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <img src={ASSIGNMENT} alt='icon' />
          </Grid>
          <Grid item>
            <Typography className={styles.name}>Project</Typography>
            <Typography className={styles.subtitle}>
              Project 1, autumn 2021, period 1-2
            </Typography>
            <Button className={styles.submit}>Add Submission</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography className={styles.time}>14:00</Typography>
      </Grid>
    </Grid>
  )
}

export default CourseDate
