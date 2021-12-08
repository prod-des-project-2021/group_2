import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CourseName } from '../index'
import styles from './styles.module.css'
import axios from 'axios'

export default function CourseTable({ searchTerm }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const URL = `${process.env.REACT_APP_URL}courses`

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await axios(URL)

        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [URL])

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        data.course
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
          })
      )}
    </Grid>
  )
}
