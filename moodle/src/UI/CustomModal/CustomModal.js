import AccessTimeIcon from '@mui/icons-material/AccessTime'
import DateRangeIcon from '@mui/icons-material/DateRange'
import SchoolIcon from '@mui/icons-material/School'
import ShortTextIcon from '@mui/icons-material/ShortText'
import {
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  Modal,
  Typography,
} from '@mui/material'
import React from 'react'
import styles from './styles.module.css'

const CustomModal = ({ title }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button className={styles.modal_btn} onClick={handleOpen}>
        {title} <Typography>2.00 PM</Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={styles.modal_container}>
            <Typography
              className={styles.modal_title}
              variant='h6'
              component='h2'
            >
              {title}
            </Typography>

            <Grid container className={styles.modal_content}>
              <Grid item xs={1}>
                <AccessTimeIcon />
              </Grid>
              <Grid item xs={11}>
                <Typography>Monday, 22 November, 2:00 PM</Typography>
              </Grid>
              <Grid item xs={1}>
                <DateRangeIcon />
              </Grid>
              <Grid item xs={11}>
                <Typography>Course event</Typography>
              </Grid>
              <Grid item xs={1}>
                <ShortTextIcon />
              </Grid>
              <Grid item xs={11}>
                <Typography>
                  You have now participated in Pronunciation workshop 2 and
                  practised diphthongs in full sentences.
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <SchoolIcon />
              </Grid>
              <Grid item xs={11}>
                <Typography>Project 1, autumn 2021, period 1-2</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: '0.5rem', mt: '0.5rem' }} />
            <Box className={styles.submit_wrapper}>
              <Button className={styles.submit}>Add Submission</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default CustomModal
