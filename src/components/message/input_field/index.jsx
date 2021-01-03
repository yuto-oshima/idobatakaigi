import React, { useState, useRef } from 'react'
import { Avatar ,Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import MessageField from '../field/index.jsx'
import MessageSubmitButton from '../submit/button/index.jsx'
import { gravatarPath } from '../../gravatar'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
})

const InputField = ({ name }) => {
  
  const inputEl = useRef(null)
  const [text, setText] = useState('')
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  return(
    <div className={ classes.root }>
      <Grid container>
        <Grid item xs={ 1 }>
          <Avatar src={ avatarPath }/>
        </Grid>
        <Grid item xs={ 10 }>
          <MessageField
            inputEl={ inputEl }
            name={ name || 'Yuto' }
            text={ text }
            setText={ setText }
          />
        </Grid>
        <Grid item xs={ 1 }>
          <MessageSubmitButton inputEl={ inputEl } name={ name || 'Yuto' } text={ text } setText={ setText }/>
        </Grid>
      </Grid>
    </div>
  )
}

export default InputField