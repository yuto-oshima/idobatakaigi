import React, { Fragment } from 'react'
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

const useStyles = makeStyles(theme => ({
  inline: {
    display: 'inline'
  }
}))

const Item = ({ name, text }) => {
 
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  return(
    <ListItem divider>
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