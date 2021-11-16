import React from 'react'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { SCHOOL_CAMPUS } from '../../constants/images'
import styles from './styles.module.css'

const ImgSlider = () => {
  return (
    <div>
      <div>
        <div
          className={styles.img_wrapper}
          style={{ backgroundImage: `url(${SCHOOL_CAMPUS})` }}
        ></div>
      </div>
    </div>
  )
}

export default ImgSlider
