import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LOGO_OAMK } from '../../constants/images'
import AuthContext from '../../store/auth-context'
import styles from './styles.module.css'

const Footer = () => {
  const authCtx = useContext(AuthContext)
  const { name } = authCtx.userInfo.userInfo
  
  return (
    <Box className={styles.container}>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <Typography className={styles.link}>
            You are logged in as {name} (
            <Link to='/' className={styles.link}>
              Log out
            </Link>
            )
          </Typography>
          <Typography>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </Typography>
          <Typography>
            <Link to='/' className={styles.link}>
              Get the mobile app
            </Link>
          </Typography>
          <Typography>
            <Link to='/' className={styles.link}>
              Policies
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <img src={LOGO_OAMK} className={styles.image} alt='oamk logo' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
