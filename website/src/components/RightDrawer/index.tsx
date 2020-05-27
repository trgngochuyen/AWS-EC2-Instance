import React, { useCallback } from 'react'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../types'
import InCartList from '../InCartList'
import { toggleDrawer } from '../../redux/actions'

export const drawerWidth = 550

const useStyles = makeStyles((theme) => ({
  root: {
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
}))

const RightDrawer = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const drawer = useSelector((state: AppState) => state.drawer.drawerOpen)

  const handleDrawerOpen = useCallback(() => {
    dispatch(toggleDrawer(!drawer))
  }, [dispatch, drawer])

  return (
    <Drawer
      className={classes.root}
      variant="persistent"
      anchor="right"
      open={drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerOpen}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <InCartList />
    </Drawer>
  )
}

RightDrawer.displayName = 'RightDrawer'

export default React.memo(RightDrawer)
