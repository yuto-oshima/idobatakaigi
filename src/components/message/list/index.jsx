import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
})

const List = ({}) => {
 
  const classes = useStyles()
  return(
    <div className={ classes.root }>Message List</div>
  )
}

export default List