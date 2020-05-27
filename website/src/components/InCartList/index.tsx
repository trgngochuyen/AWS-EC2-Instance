import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'

import Flag from '../Flag'
import ThemedButton from '../ThemedButton'
import { removeProduct } from '../../redux/actions'
import { AppState } from '../../types'

export const drawerWidth = 550

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  listItemValue: {
    paddingLeft: '20px',
  },
}))

const InCartList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const product = useSelector((state: AppState) => state.product.inCart)

  return (
    <List>
      {product.map(p => (
        <ListItem key={p.id}>
          <ListItemIcon>
            <Flag flagUrl={p.flagUrl} name={p.name} />
          </ListItemIcon>
          <ListItemText className={classes.listItemValue} primary={p.name} />
          <ThemedButton
            btnId="removeBtn"
            onClick={() => dispatch(removeProduct(p))}
          >
            Remove
          </ThemedButton>
        </ListItem>
      ))}
    </List>
  )
}

InCartList.displayName = 'InCartList'

export default React.memo(InCartList)
