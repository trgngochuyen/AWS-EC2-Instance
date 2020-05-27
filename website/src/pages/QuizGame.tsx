import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'

import { OptionType, QuizzType } from '../gameTypes'
import QuizzAndOptions from '../quizzGameComponents/QuizzAndOptions'

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

const QuizzGame = () => {
  const classes = useStyles()
  const [quizz, setQuizz] = useState<QuizzType>('haha?')
  const [correct, setCorrect] = useState<OptionType>('Correct')
  const [incorrect1, setIncorrect1] = useState<OptionType>('Incorrect1')
  const [incorrect2, setIncorrect2] = useState<OptionType>('Incorrect2')
  const [incorrect3, setIncorrect3] = useState<OptionType>('Incorrect3')
  let options: OptionType[] = [correct, incorrect1, incorrect2, incorrect3]
  let shuffledOptions = _.shuffle(options)
  setQuizz('')
  setCorrect('')
  setIncorrect1('')
  setIncorrect2('')
  setIncorrect3('')
  return (
    <div className={classes.root}>
      <QuizzAndOptions
        quizz={quizz}
        option1={shuffledOptions[1]}
        option2={shuffledOptions[2]}
        option3={shuffledOptions[3]}
        option4={shuffledOptions[0]}
      />
    </div>
  )
}
QuizzGame.displayName = 'QuizzGame'

export default QuizzGame
