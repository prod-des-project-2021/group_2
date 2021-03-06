import { Avatar, Breadcrumbs, Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomButton, Footer, Header } from '../../UI'
import styles from './styles.module.css'
import axios from 'axios'

const Profile = () => {
   const [data, setData] = useState([])

  const userId = localStorage.getItem('userId')
  const idToken = localStorage.getItem('token')
  const URL = `${process.env.REACT_APP_URL}users/${userId}`

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await axios(URL, {
          headers: {
            Authorization: 'Bearer ' + idToken,
          },
        })
        setData(userInfo.data)
      } catch (error) {}
    }
    fetchData()
  }, [URL])
  console.log(data)
   const name = data?.result?.name || 'Loading'
   const email = data?.result?.email || 'Loading'
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          spacing={2}
        >
          <Grid item>
            <Grid
              container
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              spacing={2}
            >
              <Grid item>
                <Avatar
                  alt='picture profile'
                  src='/static/images/avatar/1.jpg'
                  sx={{ width: 80, height: 80 }}
                />
              </Grid>
              <Grid item>
                <Typography className={styles.name}>
                  {name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <div className={styles.wrapper_button}>
                  <CustomButton className={styles.button_default}>
                    Reset page to default
                  </CustomButton>
                </div>
              </Grid>
              <Grid item>
                <div className={styles.wrapper_button}>
                  <CustomButton>Customize this page</CustomButton>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          role='presentation'
       
          className={styles.wrapper_link}
        >
          <Breadcrumbs aria-label='breadcrumb'>
            <Link to='/dashboard' className={styles.link}>
              Dashboard
            </Link>
            <Link to='/profile' className={styles.link}>
              Profile
            </Link>
          </Breadcrumbs>
        </Box>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          className={styles.container_info}
        >
          <Grid item xs>
            <Box className={styles.wrapper_info}>
              <Typography className={styles.title}>User details</Typography>
              <Typography className={styles.info_title}>
                Email address
              </Typography>
              <a href={`mailto:${email}`} className={styles.email}>
                {email}
              </a>
            </Box>
            <Box className={styles.wrapper_info}>
              <Typography className={styles.title}>
                Privacy and policies
              </Typography>
              <Typography>Data retention summary</Typography>
              <Typography>Policies and agreements</Typography>
            </Box>
            <Box className={styles.wrapper_info}>
              <Typography className={styles.title}>Miscellaneous</Typography>
              <Typography>My certificates</Typography>
              <Typography>Forum posts</Typography>
              <Typography>Forum discussions</Typography>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={styles.wrapper_info}>
              <Typography className={styles.title}>Reports</Typography>
              <Typography>Browser sessions</Typography>
              <Typography>Grades overview</Typography>
            </Box>
            <Box className={styles.wrapper_info}>
              <Typography className={styles.title}>Mobile app</Typography>
              <Typography className={styles.info_title}>
                QR code for mobile app access
              </Typography>
              <Typography>
                Scan the QR code with your mobile app and you will be
                automatically logged in. The QR code will expire in 10 minutes.
              </Typography>
              <div className={styles.wrapper_view_code}>
                <CustomButton>View QR Code</CustomButton>
              </div>
              <Typography>This site has mobile app access enabled.</Typography>
              <a href='#'>Download the mobile app.</a>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Profile
