import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
})

const InputField = props => {

  const classes = useStyles()

  return(
    <div className={ classes.root }>Message Input Field</div>
  )
}

export default InputField