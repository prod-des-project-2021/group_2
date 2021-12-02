import { Grid } from '@mui/material'
import React from 'react'
import { course } from '../../constants/data'
import { CourseName } from '../index'
import styles from './styles.module.css'

export default function CourseTable({ searchTerm }) {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      {course
        ?.filter((val) => {
          if (searchTerm === '') {
            return val
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val
          }
        })
        .map((val, key) => {
          return (
            <Grid
              item
              xs={12}
              key={`course-name-${key}`}
              className={styles.course_container}
            >
              <CourseName course={val}></CourseName>
            </Grid>
          )
        })}
    </Grid>
  )
}
