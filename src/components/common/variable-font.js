import React, { useEffect } from 'react'
import LayoutCenter from 'components/layouts/center'

const VariableFont = ({ children }) => {
  useEffect(() => {
    const title = document.querySelector('#variable')
    const resize = (event) => {
      const x = (event.clientX || event.touches) ? event.clientX || event.touches[0].clientX : 100
      const y = (event.clientY || event.touches) ? event.clientY || event.touches[0].clientY : 100
      const height = window.innerHeight
      const width = window.innerWidth
      const wght = ((x * 800) / width) + 100
      const wdth = ((y * 200) / height)
      title.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}`
    }

    document.addEventListener('mousemove', resize)
    document.addEventListener('touchmove', resize)

    return () => {
      document.removeEventListener('mousemove', resize)
      document.removeEventListener('touchmove', resize)
    }
  })

  return (
    <span id="variable">{children}</span>
  )
}

export default VariableFont
