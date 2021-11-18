import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../UI/index'
import styles from '../LoginForm/styles.module.css'

const RegisterForm = () => {
  return (
    <Box className={styles.login_container}>
      <Typography className={styles.title}>Register to Moodle</Typography>

      <Box className={styles.input_wrapper}>
        <TextField placeholder='Name' fullWidth variant='outlined'></TextField>
      </Box>

      <Box className={styles.input_wrapper}>
        <TextField
          placeholder='E-mail'
          fullWidth
          variant='outlined'
        ></TextField>
      </Box>

      <Box className={styles.input_wrapper}>
        <TextField
          placeholder='Password'
          fullWidth
          variant='outlined'
        ></TextField>
      </Box>
      <Box className={styles.wrapper_button}>
        <CustomButton fullWidth>Register</CustomButton>
        <Typography className={styles.question}>
          Have an account?
          <Link to='login' className={styles.link}>
            {' '}
            Login here!
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default RegisterForm
