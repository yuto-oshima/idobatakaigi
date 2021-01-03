import React, { Fragment, useState } from 'react'

// components
import Main from '../main/index.jsx'
import SignIn  from '../sign_in/index.jsx'

const App = props => {
 
  const [name, setName] = useState('')
 
  if(name) {
    return(<Main name={ name }/>)
  } else {
    return(<SignIn setName={ setName }/>)
  }
}

export default App