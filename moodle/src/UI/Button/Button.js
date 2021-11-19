import React from 'react'
import { Button } from '@mui/material'

const CustomButton = (props) => {
  return (
    <Button type={props.type} onClick={props.onClick} >
      {props.children}
    </Button>
  )
}

export default CustomButton
