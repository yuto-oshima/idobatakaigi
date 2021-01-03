import React from 'react'
import { IconButton } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

// libraries
import { pushMessage } from '../../../../firebase'

const Button = ({ name, text, setText }) => {
 
  return(
    <IconButton
      disabled={ text === '' }
      onClick={ () => {
        pushMessage({ name, text })
        setText('')
      }}
    >
      <SendIcon />
    </IconButton>
  )
}

export default Button