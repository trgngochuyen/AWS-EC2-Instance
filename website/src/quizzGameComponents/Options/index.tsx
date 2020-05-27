import React /*{ useState }*/ from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
///Empty lines before personal component imports

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

type Props = {
  content: string
}
const Options = ({ content }: Props) => {
  //logic
  const classes = useStyles()
  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>{content}</Paper>
    </Grid>
  )
}

Options.displayName = 'Options'

export default Options
