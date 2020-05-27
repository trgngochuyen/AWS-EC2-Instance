import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Options from '../Options'
import Quizz from '../Quizz'
import { QuizzType, OptionType } from '../../gameTypes'

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
  quizz: QuizzType
  option1: OptionType
  option2: OptionType
  option3: OptionType
  option4: OptionType
}
const QuizzAndOptions = ({
  quizz,
  option1,
  option2,
  option3,
  option4,
}: Props) => {
  //logic
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Quizz content={quizz} />
        <Options content={option1} />
        <Options content={option2} />
        <Options content={option3} />
        <Options content={option4} />
      </Grid>
    </div>
  )
}

QuizzAndOptions.displayName = 'QuizzAndOptions'

export default QuizzAndOptions
