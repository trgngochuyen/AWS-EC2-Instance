import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import random from 'lodash/random'

import Home from './pages/Home'
import Country from './pages/Country'
import QuizzGame from './pages/QuizGame'
import ThemeContext, { themes } from './contextAPI'

const Routes = () => {
  // Switch Theme randomly
  const [context, setContext] = useState({
    theme: themes[1],
    switchTheme: () => {
      const randomTheme = themes[random(0, 5)]
      setContext((current) => ({
        ...current,
        theme: randomTheme,
      }))
    },
  })

  return (
    <ThemeContext.Provider value={context}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countries/:alpha3Code" component={Country} />
        <Route exact path="/quizzgame" component={QuizzGame} />
      </Switch>
    </ThemeContext.Provider>
  )
}
export default Routes
