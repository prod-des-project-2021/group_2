import { Breadcrumbs, Button, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from './styles.module.css'

const DetailCourse = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isEnrollMessage, setIsEnrollMessage] = useState('')

  const params = useParams()
  const URL = `${process.env.REACT_APP_URL}courses/${params.courseId}`
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
  const userId = localStorage.getItem('userId')
  const submitHandler = (event) => {
    event.preventDefault()
    axios({
      method: 'put',
      url: `${process.env.REACT_APP_URL}users/${userId}/${params.courseId}/enrolling`,
    })
      .then((res) => {
        setIsEnrollMessage(res?.data?.mes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  let courseName = data.result
  if (courseName === undefined) {
    return 'Loading'
  } else {
    courseName = data.result.name
  }
  return (
    <React.Fragment>
      <Header />
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Container className={styles.container}>
          <form onSubmit={submitHandler}>
            <Box>
              <Typography className={styles.course_name}>
                {courseName}
              </Typography>
            </Box>
            <Breadcrumbs className={styles.breadcrums_wrapper}>
              <Link to={'/dashboard'} className={styles.link}>
                Dashboard
              </Link>
              <Link to={'/course'} className={styles.link}>
                <Typography> Course</Typography>
              </Link>
              <Link to='' aria-current='page' className={styles.link}>
                {courseName}
              </Link>
            </Breadcrumbs>
            <Box className={styles.course_content}>
              <Box className={styles.course_part}>
                <Typography className={styles.title}>Intro</Typography>
                <Box className={styles.content_wrapper}>
                  <Typography>This is the intro of the course</Typography>
                </Box>
              </Box>
              <Box className={styles.course_part}>
                <Typography className={styles.title}>Documentation</Typography>
                <Box className={styles.content_wrapper}>
                  <Typography>This is the documentations </Typography>
                </Box>
              </Box>
              <Box>
                <Typography className={styles.title}>
                  Frequently Asked Questions
                </Typography>
                <Box className={styles.content_wrapper}>
                  <Typography>This is the FAQ </Typography>
                </Box>
              </Box>

              <Box className={styles.btn_wrapper}>
                <Button
                  type='submit'
                  variant='contained'
                  className={styles.btn}
                >
                  Enroll
                </Button>
              </Box>

              {isEnrollMessage !== '' && (
                <Box className={styles.btn_wrapper}>
                  <Typography className={styles.enroll_message}>
                    {isEnrollMessage}!
                  </Typography>
                </Box>
              )}
            </Box>
          </form>
        </Container>
      )}

      <Footer />
    </React.Fragment>
  )
}

export default DetailCourse
