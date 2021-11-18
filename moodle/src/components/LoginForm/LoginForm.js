import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { CustomButton } from '../../UI/index'
import styles from './styles.module.css'

const LoginForm = () => {
  return (
    <Box className={styles.login_container}>
      <Typography>Sign in to Moodle</Typography>
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

      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked className={styles.checkbox} />}
              label='Remember me'
            />
          </FormGroup>
        </Grid>
        <Grid item>
          <Link to='/'>Forgot password?</Link>
        </Grid>
      </Grid>
      <Box className={styles.wrapper_button}>
        <CustomButton fullWidth>Sign In</CustomButton>
      </Box>
    </Box>
  )
}

export default LoginForm
