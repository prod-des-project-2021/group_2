import FilterAltIcon from '@mui/icons-material/FilterAlt'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SortIcon from '@mui/icons-material/Sort'
import {
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { CourseItem } from '..'
=======
import React, { useState } from 'react'
import { CourseItem } from '../index'
>>>>>>> 9d4fb2e4270013302dbcb96661ba2b0a689bf4fc
import styles from './styles.module.css'
import axios from 'axios'
const CourseOverview = ({ courses }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

<<<<<<< HEAD
=======
const CourseOverview = ({ courses }) => {
>>>>>>> 9d4fb2e4270013302dbcb96661ba2b0a689bf4fc
  const [anchorElTime, setAnchorElTime] = useState(null)
  const [anchorElName, setAnchorElName] = useState(null)

  const openTime = Boolean(anchorElTime)

  const openName = Boolean(anchorElName)

  

  const handleClickTime = (event) => {
    setAnchorElTime(event.currentTarget)
  }
  const handleCloseTime = () => {
    setAnchorElTime(null)
  }

  const handleClickName = (event) => {
    setAnchorElName(event.currentTarget)
  }
  const handleCloseName = () => {
    setAnchorElName(null)
  }

  function GetCourse() {
    return (
      <Grid
        container
        direction='row'
        justifyContent='flex-start'
        alignItems='center'
        spacing={2}
        className={styles.courses_wrapper}
      >
        {courses?.map((course) => (
          <Grid item xs={4} key={course?._id}>
            <CourseItem course={course} />
          </Grid>
        ))}
      </Grid>
    )
  }
  return (
    <Box className={styles.course_container}>
      <Box>
        <Typography className={styles.title}>Course overview</Typography>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button
            className={styles.buttons}
            variant="outlined"
            aria-haspopup={true}
            aria-expanded={openTime ? true : undefined}
            disableElevation
            onClick={handleClickTime}
            startIcon={<FilterAltIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            In progress
          </Button>
          <Menu
            open={openTime}
            anchorEl={anchorElTime}
            onClose={handleCloseTime}
          >
            <MenuItem onClick={handleCloseTime}>
              All (except removed from view)
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />

            <MenuItem onClick={handleCloseTime}>In progress</MenuItem>
            <MenuItem>Fututre</MenuItem>
            <MenuItem onClick={handleCloseTime}>Past</MenuItem>
            <MenuItem onClick={handleCloseTime}>Started</MenuItem>
          </Menu>
        </Grid>
        <Grid item>
          <Button
            className={styles.buttons}
            variant="outlined"
            aria-haspopup="true"
            aria-expanded={openName ? 'true' : undefined}
            disableElevation
            onClick={handleClickName}
            startIcon={<SortIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Course name
          </Button>
          <Menu
            anchorEl={anchorElName}
            open={openName}
            onClose={handleCloseName}
          >
            <MenuItem onClick={handleCloseName}>Course name</MenuItem>
            <MenuItem onClick={handleCloseName}>Last accessed</MenuItem>
          </Menu>
        </Grid>
      </Grid>
      {courses !== 'Loading' && <GetCourse />}
    </Box>
  )
}

export default CourseOverview
