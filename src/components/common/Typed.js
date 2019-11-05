import React, { useEffect } from 'react'
import Typed from 'typed.js'
// https://github.com/mattboldt/typed.js/

const DynamicText = ({ children }) => {
  useEffect(() => {
    new Typed('#typed', {
      stringsElement: '#typed-strings',
      smartBackspace: true,
      loop: false,
      showCursor: true,
      typeSpeed: 40,
    })
  }, [])

  return (
    <React.Fragment>
      <div id="typed-strings">
        {children}
      </div>
      <span id="typed" />
    </React.Fragment>
  )
}

export default DynamicText
