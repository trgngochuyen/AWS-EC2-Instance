import { combineReducers } from 'redux'

import product from './product'
import drawer from './drawer'
import countriesList from './country'

const createRootReducer = () =>
  combineReducers({
    product,
    drawer,
    countriesList,
  })

export default createRootReducer
