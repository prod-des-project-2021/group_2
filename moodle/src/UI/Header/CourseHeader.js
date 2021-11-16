import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import CloseIcon from '@mui/icons-material/Close'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    float: 'left',
    fontFamily:
      '"Roboto",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;',
  },
}))

const CourseHeader = () => {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2b4853' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PersonOutlineIcon style={{ fontSize: 50 }} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Box sx={{ flexGrow: 3 }}>
              Huy Bui
              <Box sx={{ alignSelf: 'flex-start' }}>
                <div className={classes.navlinks}>
                  <Link to="/" className={classes.link}>
                    Profile
                  </Link>
                  <Link to="/dashboard" className={classes.link}>
                    Dashboard
                  </Link>
                  <Link to="/grades" className={classes.link}>
                    Grades
                  </Link>
                  <Link to="/preferences" className={classes.link}>
                    Preferences
                  </Link>
                  <Link to="/logout" className={classes.link}>
                    Log out
                  </Link>
                </div>
              </Box>
            </Box>
          </Typography>

          <IconButton>
            <CloseIcon style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default CourseHeader
