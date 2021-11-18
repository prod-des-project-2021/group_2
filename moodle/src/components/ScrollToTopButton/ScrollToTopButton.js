import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const ScrollToTopButton = () => {
  const [isVisiable, setIsVisible] = useState(false)

  // show button when page is scrolled
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // set the top cordinate to 0 and make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisiable && (
        <Box>
          <IconButton className={styles.button} onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      )}
    </>
  )
}

export default ScrollToTopButton
