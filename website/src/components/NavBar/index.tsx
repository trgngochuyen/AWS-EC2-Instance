import React from 'react'

import SearchBar from '../SearchBar'
import MyAppBar from '../MyAppBar'

export const drawerWidth = 550
type Props = {
  search: string
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void
}
function NavBar({ search, handleChange }: Props) {
  return (
    <MyAppBar>
      <SearchBar search={search} handleSearch={handleChange} />
    </MyAppBar>
  )
}
NavBar.displayName = 'NavBar'

export default NavBar
