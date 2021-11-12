import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { useState } from 'react'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import Box from '@mui/material/Box'

const DashboardItems = () => {
  const [touched, setTouched] = useState(false)
  const iconHandler = () => {
    setTouched(!touched)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={iconHandler}>
            {!touched && <StarBorderIcon />}
            {touched && <StarOutlinedIcon />}
          </IconButton>
        }
      />
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://moodle.oulu.fi/theme/image.php/snap/core/1630669960/u/f1"
          color="grey"
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <CardHeader
              action={
                <Box display="flex" justifyContent="center">
                  <IconButton aria-label="settings" onClick={iconHandler}>
                    <PersonOutlineOutlinedIcon />
                    <PersonOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              }
            />
          </Typography>
          <Typography variant="body1" color="text.primary">
            Company-Oriented Product Development Projects
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DashboardItems
