import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../UI/index'
import styles from '../LoginForm/styles.module.css'

const RegisterForm = () => {
  const history = useHistory()
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const [errorMessage, setErrorMessage] = useState({})
  let isError = false

  const registerHandler = (event) => {
    setErrorMessage({})

    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    const url = `${process.env.REACT_APP_URL}register`

    if (!enteredName.length > 1) {
      isError = true
      setErrorMessage({ name: 'Your name is too short' })
    }
    if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(enteredEmail)) {
      isError = true
      setErrorMessage({ email: 'Invalid email' })
    }

    if (!isError) {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          if (res.ok) {
            console.log(res)
            alert('Successfully')
            history.push('/login')
            return res.json({ msg: 'Successfully' })
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
  }
  return (
    <Box className={styles.login_container}>
      <Typography className={styles.title}>Register to Moodle</Typography>
      <form onSubmit={registerHandler}>
        <Box className={styles.input_wrapper}>
          <TextField
            placeholder='Name'
            fullWidth
            variant='outlined'
            required
            inputRef={nameInputRef}
            error={!!errorMessage.name}
            helperText={errorMessage.name && errorMessage.name}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder='E-mail'
            fullWidth
            variant='outlined'
            type='email'
            required
            inputRef={emailInputRef}
            error={!!errorMessage.email}
            helperText={errorMessage.email && errorMessage.email}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder='Password'
            fullWidth
            variant='outlined'
            type='password'
            required
            inputRef={passwordInputRef}
          ></TextField>
        </Box>
        <Box className={styles.wrapper_button}>
          <CustomButton fullWidth type='submit'>
            Register
          </CustomButton>
          <Typography className={styles.question}>
            Have an account?
            <Link to='login' className={styles.link}>
              Login here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default RegisterForm
