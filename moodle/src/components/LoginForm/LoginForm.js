import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useContext, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import { CustomButton } from '../../UI/index'
import styles from './styles.module.css'
const LoginForm = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [errorMessage, setErrorMessage] = useState('')
  let isError = false

  const loginHandler = (event) => {
    setErrorMessage('')
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    if (!enteredEmail.match(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/)) {
      isError = true
      setErrorMessage('Invalid email')
    }

    if (!isError) {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_URL}login`,
        data: {
          email: enteredEmail,
          password: enteredPassword,
        },
      })
        .then((res) => {
          authCtx.login(res.data.idToken, res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  if (authCtx.isLoggedIn) {
    history.replace('/')
  }
  return (
    <Box className={styles.login_container}>
      <Typography className={styles.title}>Sign in to Moodle</Typography>
      <form onSubmit={loginHandler}>
        <Box className={styles.input_wrapper}>
          <TextField
            required
            placeholder='E-mail'
            fullWidth
            variant='outlined'
            type='email'
            inputRef={emailInputRef}
            error={!!errorMessage}
            helperText={errorMessage && errorMessage}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            required
            placeholder='Password'
            fullWidth
            variant='outlined'
            type='password'
            inputRef={passwordInputRef}
          ></TextField>
        </Box>

        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked className={styles.checkbox} />
                }
                label='Remember me'
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <Link to='/'>Forgot password?</Link>
          </Grid>
        </Grid>
        <Box className={styles.wrapper_button}>
          <CustomButton fullWidth type='submit'>
            Sign In
          </CustomButton>
          <Typography className={styles.question}>
            Don't have an account?
            <Link to='register' className={styles.link}>
              Register here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default LoginForm
