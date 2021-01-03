import React, { useEffect, useState } from 'react'
import _List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import { messagesRef } from '../../../firebase'

// components
import MessageItem from '../item/index.jsx'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%'
  },
})

const List = ({}) => {
 
  const [messages, setMessages] = useState([])
  const classes = useStyles()
  
  useEffect(() => {
    messagesRef.orderByKey().limitToLast(15).on('value', snapshot => {
      const messages = snapshot.val()
      if(messages === null) return
      const entries = Object.entries(messages)
      const newMessages = entries.map(entry => {
        const [key, nameAndText] = entry
        return { key, ...nameAndText }
      })
      setMessages(newMessages)
    })
  }, []);

  return(
    <_List className={ classes.root }>
      {
        messages.map(({ key, name, text }) => {
          return(
            <MessageItem key={ key } name={ name } text={ text }/>
          )
        })
      }
    </_List>
  )
}

export default List