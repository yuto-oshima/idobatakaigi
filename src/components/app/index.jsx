import React, { Fragment, useState } from 'react'

// components
import Main from '../main/index.jsx'
import SignIn  from '../sign_in/index.jsx'

// Config
import config from '../../config.json'

const App = props => {
 
  const [name, setName] = useState('')
 
  if(config.signInEnabled && name === '') {
    return(<SignIn setName={ setName }/>)
  } else {
    return(<Main name={ name }/>)
  }
}

export default App