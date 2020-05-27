import React, { FunctionComponent, useContext } from 'react'
import Button from '@material-ui/core/Button'

import ThemeContext from '../../contextAPI'

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  btnId: string
  href?: string
}
const ThemedButton: FunctionComponent<Props> = ({
  btnId,
  onClick,
  href,
  children,
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Button
      id={btnId}
      style={{ color: theme.color, backgroundColor: theme.background }}
      onClick={onClick}
      href={href}
    >
      {children}
    </Button>
  )
}

ThemedButton.displayName = 'ThemedButton'

export default ThemedButton
