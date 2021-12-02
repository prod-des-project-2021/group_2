import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { Card, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Progress } from '../index'
import styles from './styles.module.css'

const CourseItem = () => {
  const [touched, setTouched] = useState(false)
  const iconHandler = () => {
    setTouched(!touched)
  }

  return (
    <Card className={styles.course_container}>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Grid item>
          <Link to='' className={styles.course_code}>
            <Typography>MATH.MA.420</Typography>
          </Link>
        </Grid>
        <Grid item>
          <IconButton className={styles.button_favorite} onClick={iconHandler}>
            {!touched && <StarBorderIcon className={styles.icon_withborder} />}
            {touched && (
              <StarOutlinedIcon className={styles.icon_filledborder} />
            )}
          </IconButton>
        </Grid>
      </Grid>

      <CardMedia
        component='img'
        height='120'
        image='https://moodle.oulu.fi/theme/image.php/snap/core/1630669960/u/f1'
        color='grey'
        alt='course img'
      />

      <Link to='' className={styles.course_name}>
        <Typography>Company-Oriented Product Development Projects</Typography>
      </Link>

      <Box>
        <Progress progress={80} />
      </Box>
    </Card>
  )
}

export default CourseItem
