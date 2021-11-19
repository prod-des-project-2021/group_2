import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../pages'
import { CustomButton } from '../../UI/index'
import styles from '../LoginForm/styles.module.css'

const RegisterForm = () => {
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const registerHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json.then((data) => {
            let errorMessage = 'Authentication failed'
            alert(errorMessage)
            throw new Error(errorMessage)
          })
        }
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  return (
    <Box className={styles.login_container}>
      <form onSubmit={registerHandler}>
        <Typography className={styles.title}>Register to Moodle</Typography>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="Name"
            fullWidth
            variant="outlined"
            inputRef={nameInputRef}
            required
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="E-mail"
            fullWidth
            variant="outlined"
            type="email"
            inputRef={emailInputRef}
            required
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="Password"
            fullWidth
            variant="outlined"
            type="password"
            inputRef={passwordInputRef}
            required
          ></TextField>
        </Box>
        <Box className={styles.wrapper_button}>
          <CustomButton fullWidth type="submit">
            Register
          </CustomButton>
          <Typography className={styles.question}>
            Have an account?
            <Link to="/login" className={styles.link} component={Login}>
              Login here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default RegisterForm
