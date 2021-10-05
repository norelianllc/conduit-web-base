import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TabContent from './TabContent'
import TabHeader from './TabHeader'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
}))
const TabPanel = (props) => {
  const classes = useStyles()
  const [active, setActive] = useState(0)
  const { tabs, direction, color, vertical, alignCenter } = props
  const handleChange = (event, activ) => {
    setActive(activ)
  }
  const handleChangeIndex = (index) => {
    setActive(index)
  }

  return (
    <div className={vertical ? classes.root : null}>
      <TabHeader
        tabs={tabs}
        active={active}
        aligncenter={alignCenter}
        vertical={vertical}
        handleChange={handleChange}
        color={color}
      />
      <TabContent
        tabs={tabs}
        active={active}
        direction={direction}
        handleChangeIndex={handleChangeIndex}
      />
    </div>
  )
}

export default TabPanel
