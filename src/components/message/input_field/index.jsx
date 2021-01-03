import React from 'react'
import { Avatar ,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
})

const InputField = props => {

  const classes = useStyles()

  return(
    <div className={ classes.root }>
      <Grid container>
        <Grid item={ true } xs={ 1 }>
          <Avatar />
        </Grid>
        <Grid item={ true } xs={ 10 }>入力</Grid>
        <Grid item={ true } xs={ 1 }>ボタン</Grid>
      </Grid>
    </div>
  )
}

export default InputField