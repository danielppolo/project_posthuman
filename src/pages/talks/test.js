import React from 'react'
import Slides from '../../components/common/slides'
import Slide from '../../components/common/slide'

const HelloWorld = ({ props }) => (
  <Slides>
    <Slide>
      <h1>Hello</h1>
    </Slide>
    <Slide>
      <h1>World</h1>
    </Slide>
    <Slide>
      <h1>Hey!</h1>
    </Slide>
  </Slides>
)


export default HelloWorld
