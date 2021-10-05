import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbar: {
    width: '220px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 56,
    color: '#373a3c',
  },
  root: {
    boxSizing: 'border-box',
  },
  brand: {
    color: '#5CB85C',
    fontFamily: 'Titillium Web',
    fontSize: '1.5rem',
  },
}))
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar elevation={0} className={classes.root} color="inherit">
      <Container maxWidth="lg">
        <Box className={classes.box}>
          <Typography className={classes.brand}>conduit</Typography>
          <Toolbar className={classes.toolbar}>
            <NavLink
              className="nav-link"
              to="https://react-redux-realworld.netlify.app/"
            >
              <Typography color="textSecondary">Home</Typography>
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://react-redux-realworld.netlify.app/login"
            >
              <Typography color="textSecondary">Sign in</Typography>
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://react-redux-realworld.netlify.app/register"
            >
              <Typography color="textSecondary">Sign up</Typography>
            </NavLink>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
