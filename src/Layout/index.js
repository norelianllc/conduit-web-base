import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => <div>{children}</div>

export default Layout

Layout.prototypes = {
  children: PropTypes.element.isRequired,
}
