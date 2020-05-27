import React, { useContext, FunctionComponent } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import ThemeSwitchBtn from '../ThemeSwitchBtn'
import ShoppingCartDrawer from '../ShoppingCartDrawer'
import ThemeContext from '../../contextAPI'
import GameBtn from '../GameBtn'

export const drawerWidth = 550

const useStyles = makeStyles(theme => ({
  root: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}))

const MyAppBar: FunctionComponent = ({ children }) => {
  const classes = useStyles()
  const { theme } = useContext(ThemeContext)

  return (
    <AppBar
      style={{ backgroundColor: theme.background, color: theme.color }}
      position="fixed"
      className={clsx(classes.root)}
    >
      <Toolbar>
        <GameBtn />
        <ThemeSwitchBtn />
        {children}
        <ShoppingCartDrawer />
      </Toolbar>
    </AppBar>
  )
}
MyAppBar.displayName = 'MyAppBar'

export default MyAppBar
