import React from 'react'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

// libraries
import { pushMessage } from '../../../../firebase'

const Button = ({ inputEl, name, text, setText }) => {
 
  return(
    <IconButton
      disabled={ text === '' }
      onClick={ () => {
        pushMessage({ name, text })
        setText('')
        inputEl.current.focus()
      }}
    >
      <SendIcon />
    </IconButton>
  )
}

export default Button