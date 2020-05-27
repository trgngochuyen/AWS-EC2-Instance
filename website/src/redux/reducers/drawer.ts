/* eslint-disable indent */
import { TOGGLE_DRAWER, ToggleDrawerAction, DrawerState } from '../../types'

const defaultState: DrawerState = {
  drawerOpen: false,
}

export default function drawer(
  state: DrawerState = defaultState,
  action: ToggleDrawerAction
): DrawerState {
  switch (action.type) {
    case TOGGLE_DRAWER: {
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
      }
    }
    default:
      return state
  }
}
