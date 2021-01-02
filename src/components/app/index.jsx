import React, { Fragment, useRef } from 'react'
import './style.sass'

// components
import SignIn  from '../sign_in/index.jsx'
import Loading from '../utils/loading/index.jsx'

const App = props => {
 
  const loadingRef = useRef(null)
 
  return(
    <Fragment>
      <SignIn />
      <Loading ref={ loadingRef }/>
    </Fragment>
  )
}

export default App