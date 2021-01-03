import React, { useState } from 'react'
import { TextField } from '@material-ui/core'

import {
  pushMessage
} from '../../../firebase'

const Field = ({ inputEl, name, text, setText }) => {

  const [isComposed, setIsComposed] = useState(false)

  return(
    <TextField
      autoFocus
      inputRef={ inputEl }
      value={ text }
      fullWidth={ true }
      onChange={ e => setText(e.target.value)}
      onKeyDown={ e => {
        if(isComposed) return

        const val = e.target.value
        if(e.key === 'Enter' && val) {
          pushMessage({ name, text })
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