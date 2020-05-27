import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeContext from '../../contextAPI'

type Props = {
  content: string
  url: string
}
const ThemedLink: FunctionComponent<Props> = ({ content, url }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Link to={url} style={{ color: theme.buttonColor, textDecoration: 'none' }}>
      {content}
    </Link>
  )
}

ThemedLink.displayName = 'ThemedLink'

export default React.memo(ThemedLink)
