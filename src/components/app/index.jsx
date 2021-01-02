import React, { Fragment, useState } from 'react'

// components
import SignIn  from '../sign_in/index.jsx'

const App = props => {
 
  const [name, setName] = useState('')
 
  return(
    <Fragment>
      <SignIn setName={ setName }/>
    </Fragment>
  )
}

export default App