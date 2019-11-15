import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBlob = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  top: ${({ yPos }) => yPos}px;
  left: ${({ xPos }) => xPos}px;
  background-image: radial-gradient(${({ color }) => color} 0%, transparent 60%);
  transition: 300ms ease-in-out;
`

const Blob = ({
  color, size, xPos, yPos,
}) => (
  <StyledBlob color={color} size={size} yPos={yPos} xPos={xPos} />
)

Blob.defaultProps = {
  size: 200,
}

Blob.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired,
}

export default Blob
