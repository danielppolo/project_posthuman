import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const LayoutStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => (
  <LayoutStyled>
    {children}
  </LayoutStyled>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
