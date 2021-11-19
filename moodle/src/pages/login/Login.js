import Grid from '@mui/material/Grid'
import React from 'react'
import { ImgSlider, LoginForm } from '../../components'

const Login = () => {
  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item xs={6}>
        <ImgSlider />
      </Grid>
      <Grid item xs={6}>
        <LoginForm />
      </Grid>
    </Grid>
  )
}

export default Login
