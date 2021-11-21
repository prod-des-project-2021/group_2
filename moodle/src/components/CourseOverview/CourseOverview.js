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
import React, { useState } from 'react'
import { CourseItem } from '..'
import styles from './styles.module.css'

const CourseOverview = () => {
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
  return (
    <Box className={styles.course_container}>
      <Box>
        <Typography className={styles.title}>Course overview</Typography>
      </Box>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <Button
            className={styles.buttons}
            variant='outlined'
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
            variant='outlined'
            aria-haspopup='true'
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
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={2}
        className={styles.courses_wrapper}
      >
        <Grid item xs={4}>
          <CourseItem></CourseItem>
        </Grid>
        <Grid item xs={4}>
          <CourseItem></CourseItem>
        </Grid>
        <Grid item xs={4}>
          <CourseItem></CourseItem>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CourseOverview
