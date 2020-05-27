import React, { FunctionComponent, useContext } from 'react'
import Chip from '@material-ui/core/Chip'

import ThemeContext from '../../contextAPI'

type Props = {
  label: string
}
const ThemedChip: FunctionComponent<Props> = ({ label }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Chip
      label={label}
      style={{ color: theme.buttonColor, textDecoration: 'none' }}
    />
  )
}

ThemedChip.displayName = 'ThemedChip'

export default ThemedChip
