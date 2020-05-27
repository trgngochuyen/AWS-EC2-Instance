import React, { useContext } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import Button from '@material-ui/core/Button'

import ThemeContext from '../../contextAPI'

function ThemeSwitchBtn() {
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <div>
      <Tooltip title="Switch Theme" aria-label="Switch Theme">
        <Button
          id="themeSwitchBtn"
          style={{ color: theme.color, backgroundColor: theme.background }}
          onClick={switchTheme}
        >
          <InvertColorsIcon />
        </Button>
      </Tooltip>
    </div>
  )
}
ThemeSwitchBtn.displayName = 'ThemeSwitchBtn'

export default React.memo(ThemeSwitchBtn)
