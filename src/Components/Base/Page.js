import React, { forwardRef } from 'react'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: 'white',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    marginTop: 20,
  },
}))

// eslint-disable-next-line
const Page = forwardRef(({ children, title = '' }, ref) => {
  const classes = useStyles()
  return (
    <div ref={ref} className={classes.root}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  )
})

export default Page
