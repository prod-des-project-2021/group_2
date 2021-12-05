import InfoIcon from '@mui/icons-material/Info'
import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const CourseName = ({ course }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <Grid container justifyContent='space-between'>
        <Grid item>
          <Link to={`course/${course.slug}`} className={styles.title}>
            <Typography>{course.name}</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Button className={styles.info_btn} onClick={handleToggle}>
            <InfoIcon></InfoIcon>
          </Button>
        </Grid>
      </Grid>

      {open && (
        <Grid item xs={12}>
          <Grid container direction='row' spacing={3}>
            <Grid item>
              <Typography className={styles.teacher}>Teacher</Typography>
            </Grid>
            <Grid item>
              {course?.teacher?.map((i) => (
                <Grid container key={`name-teacher-${i}`}>
                  <Grid item>
                    <Typography> {i}</Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  )
}

export default CourseName
