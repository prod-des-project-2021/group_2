import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { CardActionArea } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import styles from './styles.module.css'

const CourseItem = () => {
  const [touched, setTouched] = useState(false)
  const iconHandler = () => {
    setTouched(!touched)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label='settings' onClick={iconHandler}>
            {!touched && <StarBorderIcon />}
            {touched && <StarOutlinedIcon />}
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='https://moodle.oulu.fi/theme/image.php/snap/core/1630669960/u/f1'
          color='grey'
          alt='green iguana'
        />

        <CardContent>
          <Box className={styles.wrapper_icon}>
            <PersonOutlineOutlinedIcon />
            <PersonOutlineOutlinedIcon />
          </Box>
          <Typography variant='body1'>
            Company-Oriented Product Development Projects
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CourseItem
