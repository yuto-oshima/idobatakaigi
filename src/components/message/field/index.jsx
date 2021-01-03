import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import {
  pushMessage
} from '../../../firebase'

const Field = ({ name, text, setText }) => {

  const [isComposed, setIsComposed] = useState(false)

  return(
    <TextField
      value={ text }
      fullWidth={ true }
      onChange={ e => setText(e.target.value)}
      onKeyDown={ e => {
        if(isComposed) return

        const val = e.target.value
        if(e.key === 'Enter' && val) {
          console.log('push message to firebase.')
          pushMessage({ name: 'Yuto', text })
          setText('')
          e.preventDefault()
        }
      }}
      onCompositionStart={ () => setIsComposed(true) }
      onCompositionEnd={ () => setIsComposed(false) }
    />
    
  )
}

export default Field