import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: '#5CB85C',

    boxShadow:
      'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
    padding: '2rem',
    marginBottom: '2rem',
  },
  title: {
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
    fontSize: '3.5rem',
    fontWeight: '700',
    color: 'white',
  },
  subtitle: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '300',
  },
}))
const Banner = () => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <div>
        <Typography align="center" className={classes.title}>
          conduit
        </Typography>
        <Typography align="center" className={classes.subtitle}>
          A place to share your knowledge.
        </Typography>
      </div>
    </Box>
  )
}

export default Banner
