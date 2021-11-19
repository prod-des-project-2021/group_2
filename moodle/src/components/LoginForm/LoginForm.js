import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React, { useRef,useContext,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import AuthContext from '../../context/auth-context'
import { Register } from '../../pages'
import { CustomButton } from '../../UI/index'
import styles from './styles.module.css'

const LoginForm = () => {
  const [isLoading,setIsLoading] = useState(false)
  const navigate = useNavigate()
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const authCtx = useContext(AuthContext)
  const submitHandler = (event) => {
    event.preventDefault()

    const enteredEmail = emailInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
    console.log(enteredEmail, enteredPassword)
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`,
      {
        method:'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
       .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  if (authCtx.isLoggedIn) {
       navigate('/')
     }
  return (
    <Box className={styles.login_container}>
      <Typography className={styles.title}>Sign in to Moodle</Typography>
      <form onSubmit={submitHandler}>
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
            {!isLoading && 'Sign In'}
            {isLoading && 'Loading'}
          </CustomButton>
          <Typography className={styles.question}>
            Don't have an account?
            <Link to="/register" className={styles.link} component={Register}>
              Register here!
            </Link>
          </Typography>
        </Box>
      </form>
    </Box>
  )
}

export default LoginForm
