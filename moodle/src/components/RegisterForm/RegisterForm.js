import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../UI/index'
import styles from '../LoginForm/styles.module.css'
import { useHistory } from 'react-router'
const RegisterForm = () => {
  const history = useHistory()
  const nameInputRef = useRef()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const registerHandler = (event) => {
    event.preventDefault()
    const enteredName = nameInputRef.current.value
    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
     const url = 'http://localhost:5000/register'

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
          return res.json({msg: 'Successfully'})
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
      <Typography className={styles.title}>Register to Moodle</Typography>
      <form onSubmit={registerHandler}>
        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="Name"
            fullWidth
            variant="outlined"
            required
            inputRef={nameInputRef}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="E-mail"
            fullWidth
            variant="outlined"
            type="email"
            required
            inputRef={emailInputRef}
          ></TextField>
        </Box>

        <Box className={styles.input_wrapper}>
          <TextField
            placeholder="Password"
            fullWidth
            variant="outlined"
            type="password"
            required
            inputRef={passwordInputRef}
          ></TextField>
        </Box>
        <Box className={styles.wrapper_button}>
          <CustomButton fullWidth type="submit">
            Register
          </CustomButton>
          <Typography className={styles.question}>
            Have an account?
            <Link to="login" className={styles.link}>
              Login here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default RegisterForm
