import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  flag: {
    width: '100px',
    height: 'auto',
    borderRadius: '30%',
  },
})

type FlagProps = {
  flagUrl: string
  name: string
}

function Flag({ flagUrl, name }: FlagProps) {
  const classes = useStyles()
  return <img className={classes.flag} src={flagUrl} alt={name} />
}

Flag.displayName = 'Flag'

export default React.memo(Flag)
