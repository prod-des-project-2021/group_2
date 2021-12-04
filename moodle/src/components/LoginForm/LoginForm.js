import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import { CustomButton } from '../../UI/index'
import styles from './styles.module.css'
import axios from 'axios'
const LoginForm = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const loginHandler = (event) => {
    event.preventDefault()
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    console.log(enteredEmail, enteredPassword)
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
    // .then((res) => {
    //   if (res.ok) {
    //     console.log(res)
    //     return res.json({ msg: 'Login successfully' })
    //   } else {
    //     return res.json().then((data) => {
    //       let errorMessage = 'Authentication failed!'
    //       // if (data && data.error && data.error.message) {
    //       //   errorMessage = data.error.message;
    //       // }
    //       throw new Error(errorMessage)
    //     })
    //   }
    // })
    // .catch((err) => {
    //   alert(err.message)
    // })
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
            placeholder="E-mail"
            fullWidth
            variant="outlined"
            type="email"
            inputRef={emailInputRef}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="Password"
            fullWidth
            variant="outlined"
            type="password"
            inputRef={passwordInputRef}
          ></TextField>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox defaultChecked className={styles.checkbox} />
                }
                label="Remember me"
              />
            </FormGroup>
          </Grid>
          <Grid item>
            <Link to="/">Forgot password?</Link>
          </Grid>
        </Grid>
        <Box className={styles.wrapper_button}>
          <CustomButton fullWidth type="submit">
            Sign In
          </CustomButton>
          <Typography className={styles.question}>
            Don't have an account?
            <Link to="register" className={styles.link}>
              Register here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default LoginForm
