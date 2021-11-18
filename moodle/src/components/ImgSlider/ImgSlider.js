import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { backgroundImg, imgSliderSettings } from '../../constants/data'
import styles from './styles.module.css'

const ImgSlider = () => {
  return (
    <Box className={styles.slider}>
      <Slider {...imgSliderSettings}>
        {backgroundImg?.map((img) => (
          <Box key={`slider-${img?.id}`}>
            <Box
              className={styles.img_wrapper}
              style={{ backgroundImage: `url(${img?.image})` }}
            >
              <Box className={styles.info_wrapper}>
                <Typography className={styles.title}>{img?.title}</Typography>
                <Typography>
                  {img?.news}{' '}
                  <Link className={styles.link} to={`${img?.link}`}>
                    See more
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  )
}

export default ImgSlider
