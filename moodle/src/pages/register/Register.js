import { Grid } from '@mui/material'
import React from 'react'
import { ImgSlider, RegisterForm } from '../../components'

const Register = () => {
  return (
    <Grid container direction='row' alignItems='center'>
      <Grid item xs={6}>
        <RegisterForm />
      </Grid>
      <Grid item xs={6}>
        <ImgSlider />
      </Grid>
    </Grid>
  )
}

export default Register
