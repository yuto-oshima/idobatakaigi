import React, { Fragment, useEffect, useRef  } from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// libraries
import { gravatarPath } from '../../gravatar'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline'
  }
}))

const Item = ({ name, text, isLastItem }) => {
 
  const ref = useRef(null)
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  useEffect(() => {
    if(isLastItem) {
      // TODO: ここでスクロールする
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLastItem])

  return(
    <ListItem divider ref={ ref }>
      <ListItemAvatar>
        <Avatar src={ avatarPath }/>
      </ListItemAvatar>
      <ListItemText
        primary={ name }
        secondary={
          <Typography
            variant='body2'
            className={ classes.inline }
            color='textPrimary'
          >
            { text }
          </Typography>
        }
      />
    </ListItem>
  )
}

export default Item