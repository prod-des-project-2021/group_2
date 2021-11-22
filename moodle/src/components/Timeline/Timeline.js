import AccessTimeIcon from '@mui/icons-material/AccessTime'
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
import CourseDate from '../CourseDate/CourseDate'
import styles from './styles.module.css'

const Timeline = () => {
  const [anchorElTime, setAnchorElTime] = useState(null)
  const [anchorElSort, setAnchorElSort] = useState(null)

  const openTime = Boolean(anchorElTime)

  const openSort = Boolean(anchorElSort)

  const handleClickTime = (event) => {
    setAnchorElTime(event.currentTarget)
  }
  const handleCloseTime = () => {
    setAnchorElTime(null)
  }

  const handleClickSort = (event) => {
    setAnchorElSort(event.currentTarget)
  }
  const handleCloseSort = () => {
    setAnchorElSort(null)
  }

  return (
    <Box>
      <Box>
        <Typography className={styles.title}>Timeline</Typography>
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
            startIcon={<AccessTimeIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          ></Button>
          <Menu
            open={openTime}
            anchorEl={anchorElTime}
            onClose={handleCloseTime}
          >
            <MenuItem onClick={handleCloseTime}>All</MenuItem>
            <MenuItem onClick={handleCloseTime}>Overdue</MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem>Due date</MenuItem>
            <MenuItem onClick={handleCloseTime}>Next 7 days</MenuItem>
            <MenuItem onClick={handleCloseTime}>Next 30 days</MenuItem>
            <MenuItem onClick={handleCloseTime}>Next 3 months</MenuItem>
            <MenuItem onClick={handleCloseTime}>Next 6 months</MenuItem>
          </Menu>
        </Grid>
        <Grid item>
          <Button
            className={styles.buttons}
            variant='outlined'
            aria-haspopup='true'
            aria-expanded={openSort ? 'true' : undefined}
            disableElevation
            onClick={handleClickSort}
            startIcon={<SortIcon />}
            endIcon={<KeyboardArrowDownIcon />}
          ></Button>
          <Menu
            anchorEl={anchorElSort}
            open={openSort}
            onClose={handleCloseSort}
          >
            <MenuItem onClick={handleCloseSort}>Sort by dates</MenuItem>
            <MenuItem onClick={handleCloseSort}>Sort by course</MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Divider sx={{ my: '1rem', mt: '1rem' }} />
      <Box>
        <CourseDate></CourseDate>
      </Box>
    </Box>
  )
}

export default Timeline
