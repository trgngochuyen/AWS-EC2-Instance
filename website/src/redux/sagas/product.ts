import { takeLatest, select, put } from 'redux-saga/effects'

import {} from '../../types'
import { toggleDrawer } from '../actions'

function* saveState() {
  const state = yield select()
  yield localStorage.setItem('state', JSON.stringify(state))
}

function* closeDrawer() {
  const state = yield select()
  if (state.product.inCart.length === 0) {
    yield put(toggleDrawer(false))
  }
}

export default [
  takeLatest('*', saveState),
  takeLatest('REMOVE_PRODUCT', closeDrawer),
]
