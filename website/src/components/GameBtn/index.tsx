import React, { useContext } from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'

import ThemeContext from '../../contextAPI'

function GameBtn() {
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <Tooltip title="Feature In Progress" aria-label="Play Quizz Games">
        <Button
          style={{ color: theme.color, backgroundColor: theme.background }}
          id="GameBtn"
        >
          <SportsEsportsIcon />
        </Button>
      </Tooltip>
    </div>
  )
}
GameBtn.displayName = 'GameBtn'

export default React.memo(GameBtn)
