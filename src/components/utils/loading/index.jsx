import React, { forwardRef, Fragment, useEffect, useImperativeHandle, useState } from 'react'
import './style.sass'

const Loading = forwardRef((props, ref) => {

  const init = {
    show: false
  }

  const [state, setState] = useState(init)

  const open = () => setState({ ...init, show: true })

  const close = () => setState({ ...init, show: false })

  useImperativeHandle(ref, () => ({ open, close }))

  return( state.show ?
    <div className='loading' onMouseDown={ e => e.stopPropagation() } onClick={ e => e.stopPropagation }>
      ...Loading
    </div>
    : null
  )
})

export default Loading