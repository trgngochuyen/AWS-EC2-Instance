import React from 'react'
import teal from '@material-ui/core/colors/teal'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import deepPurple from '@material-ui/core/colors/deepPurple'
import green from '@material-ui/core/colors/green'
import indigo from '@material-ui/core/colors/indigo'
import brown from '@material-ui/core/colors/brown'
import blueGrey from '@material-ui/core/colors/blueGrey'
import amber from '@material-ui/core/colors/amber'
import cyan from '@material-ui/core/colors/cyan'
import pink from '@material-ui/core/colors/pink'

import { ThemeType } from './types'

export const themes: ThemeType[] = [
  {
    name: 'teal',
    color: teal[50],
    background: teal[500],
    buttonColor: teal[700],
    disabledBtnBackground: teal[100],
    disabledBtnColor: teal[300],
  },
  {
    name: 'blue',
    color: blue[50],
    background: blue[500],
    buttonColor: blue[700],
    disabledBtnBackground: blue[100],
    disabledBtnColor: blue[300],
  },
  {
    name: 'red',
    color: red[500],
    background: red[100],
    buttonColor: red[700],
    disabledBtnBackground: red[50],
    disabledBtnColor: red[100],
  },
  {
    name: 'deepPurple',
    color: deepPurple[50],
    background: deepPurple[500],
    buttonColor: deepPurple[700],
    disabledBtnBackground: deepPurple[100],
    disabledBtnColor: deepPurple[300],
  },
  {
    name: 'green',
    color: green[50],
    background: green[500],
    buttonColor: green[700],
    disabledBtnBackground: green[100],
    disabledBtnColor: green[300],
  },
  {
    name: 'indigo',
    color: indigo[50],
    background: indigo[500],
    buttonColor: indigo[700],
    disabledBtnBackground: indigo[100],
    disabledBtnColor: indigo[300],
  },
  {
    name: 'brown',
    color: brown[50],
    background: brown[500],
    buttonColor: brown[700],
    disabledBtnBackground: brown[100],
    disabledBtnColor: brown[300],
  },
  {
    name: 'blueGrey',
    color: blueGrey[50],
    background: blueGrey[500],
    buttonColor: blueGrey[700],
    disabledBtnBackground: blueGrey[100],
    disabledBtnColor: blueGrey[300],
  },
  {
    name: 'amber',
    color: amber[50],
    background: amber[500],
    buttonColor: amber[700],
    disabledBtnBackground: amber[100],
    disabledBtnColor: amber[300],
  },
  {
    name: 'cyan',
    color: cyan[50],
    background: cyan[500],
    buttonColor: cyan[700],
    disabledBtnBackground: cyan[100],
    disabledBtnColor: cyan[300],
  },
  {
    name: 'pink',
    color: pink[50],
    background: pink[500],
    buttonColor: pink[700],
    disabledBtnBackground: pink[100],
    disabledBtnColor: pink[300],
  },
]

export default React.createContext({
  theme: themes[1],
  switchTheme: () => {},
})
