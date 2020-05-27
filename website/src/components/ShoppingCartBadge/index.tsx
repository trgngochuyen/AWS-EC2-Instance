import React, { useContext, useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import Tooltip from '@material-ui/core/Tooltip'

import { AppState } from '../../types'
import ThemeContext from '../../contextAPI'
import { toggleDrawer } from '../../redux/actions'

export const drawerWidth = 550

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  listItemValue: {
    paddingLeft: '20px',
  },
  shoppingBasketDrawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  shoppingCartButton: {
    position: 'absolute',
    right: '10px',
    top: '13px',
  },
  toolBar: {
    position: 'relative',
  },
}))

function ShoppingCartBadge() {
  const classes = useStyles()
  const product = useSelector((state: AppState) => state.product.inCart)
  const drawer = useSelector((state: AppState) => state.drawer.drawerOpen)
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)

  const handleDrawerOpen = useCallback(() => {
    dispatch(toggleDrawer(!drawer))
  }, [dispatch, drawer])

  return (
    <div className={classes.root}>
      <Tooltip title="Shopping Cart" aria-label="Shopping Cart">
        <Button
          className={classes.shoppingCartButton}
          onClick={handleDrawerOpen}
          style={{ color: theme.color, backgroundColor: theme.background }}
          aria-label="cart"
        >
          <Badge badgeContent={product.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Tooltip>
    </div>
  )
}
ShoppingCartBadge.displayName = 'ShoppingCartBadge'

export default React.memo(ShoppingCartBadge)
