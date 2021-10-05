import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Header from './Header'

const Layout = ({ children }) => (
  <div>
    <Grid>
      <Header />
    </Grid>
    <Grid>{children}</Grid>
  </div>
)

export default Layout

Layout.prototypes = {
  children: PropTypes.element.isRequired,
}
