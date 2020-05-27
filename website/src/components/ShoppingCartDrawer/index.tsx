import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import RightDrawer from '../RightDrawer'
import ShoppingCartBadge from '../ShoppingCartBadge'

export const drawerWidth = 550

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}))

function ShoppingCartDrawer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ShoppingCartBadge />
      <RightDrawer />
    </div>
  )
}
ShoppingCartDrawer.displayName = 'ShoppingCartDrawer'

export default React.memo(ShoppingCartDrawer)
