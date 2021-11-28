import { Grid } from '@mui/material'
import React from 'react'
import { course } from '../../constants/data'
import { CourseName } from '../index'
import styles from './styles.module.css'

export default function CourseTable() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      {course.map((row, index) => (
        <Grid
          item
          xs={12}
          key={`course-name-${index}`}
          className={styles.course_container}
        >
          <CourseName course={row}></CourseName>
        </Grid>
      ))}
    </Grid>
  )
}
