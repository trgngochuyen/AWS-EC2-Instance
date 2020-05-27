import { TOGGLE_DRAWER, ToggleDrawerAction } from '../../types'

export function toggleDrawer(drawerOpen: boolean): ToggleDrawerAction {
  return {
    type: TOGGLE_DRAWER,
    payload: {
      drawerOpen,
    },
  }
}
